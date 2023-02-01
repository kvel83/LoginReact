# Login React
**URL**: https://kvel83.github.io/LoginReact/

<h2>Descripción</h2>
<p>Proyecto realizado en React. Login que valida usuario y contraseña que sean correctos, con un botón que solo se visualiza si ambos capos tienen datos. Además muestra 2 alerts, uno para cuando los datos son correctos y otro para cuando los datos son incorrectos.

## Datos de ingreso
Username: Admin
Password: Admin123.</p>
<h2>Estado del proyecto</h2>
<h4 align="center"> Proyecto Finalizado</h4>
<h2>Funcionalidades</h2>

 - Validación de username y password: Al dar click al botón de Iniciar Sesión toma la información escrita en username y password y las guarda en 2 estados distintos los cuales usa para validar que sean correctos .
 - Display del Botón Iniciar Sesión: La página inicialmente se renderiza ocultando el botón de Iniciar Sesión. Este solo se muestra si existen datos en username y en password, los cuales se validan en el evento onChange con sus estados correspondientes.
 - Alerts: Una vez ingresado el username y el password y, presionado el botón de Iniciar Sesión se llama a la función asociada al onSubmit donde se valida que los datos sean correctos. En caso de ser incorrectos se despliega un alert para indicar que alguno de los datos esta incorrecto, en caso de estar bien  se despliega otro alert indicando que el inicio de sesión fue exitoso.
 - onSubmit: En este evento se llama a la función handleSubmit la cual verifica que username y password sean correctos, despliega el alert que corresponda y hacia los inputs del formulario.
				 
<h2>Tecnologías utilizadas</h2>
 
 - React V18.2.0
 - React Bootstrap V1.6.1
