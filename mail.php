<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {

   if (isset($_POST['phone'])) {$phone = $_POST['phone'];}
   if (isset($_POST['phone_type'])) {$phone = $_POST['qn8'];}
   if (isset($_POST['������1'])) {$������1 = $_POST['qn1'];}
   if (isset($_POST['������2'])) {$������2 = $_POST['qn2'];}
   if (isset($_POST['������3'])) {$������3 = $_POST['qn3'];}
   if (isset($_POST['������4'])) {$������4 = $_POST['qn4'];}
   if (isset($_POST['������5'])) {$������5 = $_POST['qn5'];}
   if (isset($_POST['������6'])) {$������6 = $_POST['qn6'];}
   if (isset($_POST['�������'])) {$������� = $_POST['qn7'];}
    $to = "frankie64ify@gmail.com"; /*������� ��� ����� ����������� �����*/
    $headers = "Content-type: text/plain; charset = utf-8";
    $subject = "������ � ����� Spa-��������";
    $message = "���������� ������������:\n
        �������: $phone \n
        ������� ���������: $phone_type \n
        ��� 1. $������1 \n
        ��� 2. $������2 \n
        ��� 3. $������3 \n
        ��� 4. $������4 \n
        ��� 5. $������5 \n
        ��� 6. $������6 \n
        ��� 7. $������7 \n
        ��� 8. �������� �����: $�������";
    $send = mail ($to, $subject, $message, $headers);
    if ($send == 'true')
    {
    echo "<div>������� �� �������� ������ ���������!</div>";
}
else
{
echo "<center><b>������. ��������� �� ����������!</b></center>";
}
} else {
http_response_code(403);
echo "���������� ��� ���";
}
?>
<!-- info@paradigma.by   -->
