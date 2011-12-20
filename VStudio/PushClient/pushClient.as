import flash.external.ExternalInterface;


class SocketServer {
  
  static var socket : XMLSocket;
  
  static function connect(host:String, port:Number) {
  _root.tf.text = "Connecting";
    socket = new XMLSocket();
    socket.onData = onData;
    socket.onConnect = onConnect;
    socket.onClose = onDisconnect;
    socket.connect(host, port);
    
  }
  
  static function disconnect(){
    socket.close();
  }
  
  static function onConnect(success:Boolean) {
    if(success){
    _root.tf.text = "Connected";
      ExternalInterface.call("pushclient.connected");
    } else {
    _root.tf.text = "Connection failed";
      ExternalInterface.call("pushclient.errorConnecting");
    }
  }
  
  static function sendData(data:String){
  _root.tf.text = "Sending: "+data;
    socket.send(unescape(data));
   _root.tf.text = "Connected";
  }
  
  static function onDisconnect() {
  _root.tf.text = "Disconnected";
    ExternalInterface.call("pushclient.disconnected");
  }
  
  static function onData(data:String) {    
    ExternalInterface.call("pushclient.receiveData", unescape(data));
    _root.tf.text = unescape(data);
  }
  
  static function main() {
    _root.createTextField("tf",0,0,0,800,600);
    System.security.allowDomain("*");
    ExternalInterface.addCallback("connect", null, connect);
    ExternalInterface.addCallback("sendData", null, sendData);
    ExternalInterface.addCallback("disconnect", null, disconnect);
    
    ExternalInterface.call("pushclient.initialized");
  }
 
}

