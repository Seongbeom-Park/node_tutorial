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
Make a message queue using rabbitmq to send hello world
```
$ yarn restart
$ yarn send
$ yarn recv
```

## work_queue
Make a message queue holding durable and persistent messages

A worker prefetchs one task at a time

```
$ yarn restart
$ yarn recv
$ yarn recv
$ sh send.sh
```

## publish_subscribe
Make a exchange which broadcast messages to multiple exclusive queues

```
$ yarn restart
$ yarn sub
$ yarn sub
$ yarn pub
```
