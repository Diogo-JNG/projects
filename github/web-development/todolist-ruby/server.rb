require 'webrick'
require 'json'
require 'mongo'

client = Mongo::Client.new('mongodb://127.0.0.1:27017/todo_db')
tasks_collection = client[:tasks]

server = WEBrick::HTTPServer.new(Port: 3000, DocumentRoot: File.join(Dir.pwd, 'public'))

# API para listar e adicionar tarefas
server.mount_proc '/tasks' do |req, res|
  res['Content-Type'] = 'application/json'
  case req.request_method
  when 'GET'
    tasks = tasks_collection.find.to_a.map { |t| t.merge(_id: t['_id'].to_s) }
    res.body = tasks.to_json
  when 'POST'
    data = JSON.parse(req.body)
    if data['action'] == 'remove'
      tasks_collection.delete_one(_id: BSON::ObjectId(data['id']))
      res.body = { status: 'deleted' }.to_json
    else
      result = tasks_collection.insert_one(title: data['title'])
      res.body = { id: result.inserted_id.to_s }.to_json
    end
  else
    res.status = 405
  end
end

trap('INT') { server.shutdown }
puts "Servidor iniciado em: http://localhost:3000"
server.start
