# RabbitMQ Tutorial
Study RabbitMQ

## Prerequisites
### [Install RabbitMQ server](https://www.rabbitmq.com/download.html)
```
# apt-get install rabbitmq-server
```

### Start/stop RabbitMQ server
```
# service rabbitmq-server start
# service rabbitmq-server stop
# service rabbitmq-server restart
```

### Listing Queues
```
# rabbitmqctl list_queues
```

## hello_world
Make a messege queue using rabbitmq to send hello world
```
$ yarn restart
$ yarn send
$ yarn recv
```
