<?
$user = $_POST["n_user"]
$password = $_POST["pass"]

$conexion = mysql_connect("localhost", "root", "root");
mysql_select_db("comunicaciones", $conexion);

$sql= "SELECT id_user FROM user WHERE n_user = '$user' AND contraseña ='$pass'";
$comprobar = mysql_query($sql);

if(mysql_num_rows($comprobar) > 0)
  $id_user = mysql_result($comprobar,0);
  setcookie("comunicaciones_userid","$id_user",time() + 3600);
  header("Location:inicio.php");
else {
  echo "Usuario o Contraseña incorrectos";
}

?>
