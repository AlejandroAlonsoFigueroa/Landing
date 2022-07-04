<?php 

  require  "PHPMailer/Exception.php";
  require  "PHPMailer/PHPMailer.php";
  require  "PHPMailer/SMTP.php";

  use PHPMailer\PHPMailer\PHPMailer;
  use PHPMailer\PHPMailer\Exception;
  use PHPMailer\PHPMailer\SMTP;



  

    $campo1 = $_POST["campo1"];
    $campo2 = $_POST["campo2"];

    $mensajeCuerpo = $campo2."".$campo1.".";

    $oMail= new PHPMailer();
    $oMail->isSMTP();
    $oMail->Host="mail.ozonoland.mx";
    $oMail->Port=465;
    $oMail->SMTPSecure="ssl";
    $oMail->SMTPAuth=true;
    $smtp_debug = true;
    $oMail->Username="contacto@ozonoland.mx";
    $oMail->Password="C0ntacto@ozonoland123";
    $oMail->setFrom("contacto@ozonoland.mx", "Cliente potencial");
    $oMail->addAddress("contacto@ozonoland.mx", "1234567");
    $oMail->Subject="¡Te estan intentando contactar!";
    $oMail->msgHTML($mensajeCuerpo);
    $oMail->CharSet = 'UTF-8';

 

   

    if(!$oMail->send())

        
        echo'<script type="text/javascript">
        alert("NO fue posible enviar tu mensaje, inténtalo de nuevo, por favor.");
        window.location.href="Contacto.php";
        </script>';
    else
        echo'<script type="text/javascript">
        alert("Tu correo ha sido enviado.");
        window.location.href="Contacto.php";
        </script>';


  

    echo"<script>Hola, desde PHP</script>";

  



?>