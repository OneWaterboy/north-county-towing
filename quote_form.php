<?php

#Receive user input
$name = $_POST['name'];
$telephone = $_POST['telephone'];
$start = $_POST['starting_address'];
$startcity = $_POST['starting_city'];
$end = $_POST['ending_address'];
$endcity = $_POST['ending_city'];
$year = $_POST['vehyear'];
$make = $_POST['vehmake'];
$model = $_POST['vehmodel'];
$description = $_POST['description'];

#Filter user input
function filter_email_header($form_field) {  
return preg_replace('/[nr|!/<>^$%*&]+/','',$form_field);
}

$name  = filter_email_header($name);

#Send email
$headers = "From: $name";
$sent = mail('northcounty_towing@yahoo.com', 'Quote Request Form Submission', $name, $headers, $telephone, $start, $startcity, $end, $endcity, $year, $make, $model, $description);

#Thank user or notify them of a problem
if ($sent) {

?><html>
<head>
<title>Thank You</title>
</head>
<body>
<h1>Thank You</h1>
<p>Thank you for requesting a quote. We will get back to you within 24 hours with a price for services</p>
</body>
</html>
<?php

} else {

?><html>
<head>
<title>Something went wrong</title>
</head>
<body>
<h1>Something went wrong</h1>
<p>We could not send your quote request. Please try again. <a href="services.html"></a></p>
</body>
</html>
<?php
}
?>