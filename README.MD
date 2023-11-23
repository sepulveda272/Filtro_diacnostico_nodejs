# Farmacia Campus - Documentación del Sistema

Este documento proporciona información detallada sobre el sistema de gestión para la Farmacia Campus. El sistema se desarrolla utilizando MongoDB como base de datos, y NodeJS junto con ExpressJS para el backend. Además, se utiliza el patrón de arquitectura Modelo Vista-Controlador (MVC) para una organización estructurada del código. Para probar y probar los endpoints, se recomienda el uso de Postman.

## Instalación y Ejecución

1. Clonar el repositorio:

```bash
https://github.com/sepulveda272/Filtro_diacnostico_nodejs.git
```
2. Instalar dependencias:

```bash
cd Filtro_diacnostico_nodejs
npm install
```
3. Iniciar la aplicación:

```bash
npm run dev
```
4. Acceder a los endpoints utilizando Postman o cualquier otra herramienta de prueba de API.

## Endpoints


### 1. Obtener todos los medicamentos con menos de 50 unidades en stock.

Endpoint: 
```bash
http://localhost:8000/get/endpoint1
```

Método: GET

### 2. Listar los proveedores con su información de contacto en medicamentos.

Endpoint: 
```bash
http://localhost:8000/get/endpoint2
```

Método: GET

### 3. Medicamentos comprados al ‘Proveedor A’.

Endpoint: 
```bash
http://localhost:8000/get/endpoint3
```

Método: GET

### 4. Obtener recetas médicas emitidas después del 1 de enero de 2023.

Endpoint: 
```bash
http://localhost:8000/get/endpoint4
```

Método: GET

### 5. Total de ventas del medicamento ‘Paracetamol’.

Endpoint: 
```bash
http://localhost:8000/get/endpoint5
```

Método: GET

### 6. Medicamentos que caducan antes del 1 de enero de 2024.

Endpoint: 
```bash
http://localhost:8000/get/endpoint6
```

Método: GET

### 7. Total de medicamentos vendidos por cada proveedor.

Endpoint: 
```bash
http://localhost:8000/get/endpoint7
```

Método: GET

### 8. Cantidad total de dinero recaudado por las ventas de medicamentos.

Endpoint: 
```bash
http://localhost:8000/get/endpoint8
```

Método: GET

### 9. Medicamentos que no han sido vendidos.

Endpoint: 
```bash
http://localhost:8000/get/endpoint9
```

Método: GET

### 10. Obtener el medicamento más caro.

Endpoint: 
```bash
http://localhost:8000/get/endpoint10
```

Método: GET

### 11. Número de medicamentos por proveedor.

Endpoint: 
```bash
http://localhost:8000/get/endpoint11
```

Método: GET

### 12. Pacientes que han comprado Paracetamol.

Endpoint: 
```bash
http://localhost:8000/get/endpoint12
```

Método: GET

### 13. Proveedores que no han vendido medicamentos en el último año.

Endpoint: 
```bash
http://localhost:8000/get/endpoint13
```

Método: GET

### 14. Obtener el total de medicamentos vendidos en marzo de 2023.

Endpoint: 
```bash
http://localhost:8000/get/endpoint14
```

Método: GET

### 15. Obtener el medicamento menos vendido en 2023.

Endpoint: 
```bash
http://localhost:8000/get/endpoint15
```

Método: GET

### 16. Ganancia total por proveedor en 2023 (asumiendo un campo precioCompra en Compras).

Endpoint: 
```bash
http://localhost:8000/get/endpoint16
```

Método: GET

### 17. Promedio de medicamentos comprados por venta.

Endpoint: 
```bash
http://localhost:8000/get/endpoint17
```

Método: GET

### 18. Cantidad de ventas realizadas por cada empleado en 2023.

Endpoint: 
```bash
http://localhost:8000/get/endpoint18
```

Método: GET

### 19. Obtener todos los medicamentos que expiren en 2024.

Endpoint: 
```bash
http://localhost:8000/get/endpoint19
```

Método: GET

### 20. Empleados que hayan hecho más de 5 ventas en total.

Endpoint: 
```bash
http://localhost:8000/get/endpoint20
```

Método: GET

### 21. Medicamentos que no han sido vendidos nunca.

Endpoint: 
```bash
http://localhost:8000/get/endpoint21
```

Método: GET

### 22. Paciente que ha gastado más dinero en 2023.

Endpoint: 
```bash
http://localhost:8000/get/endpoint22
```

Método: GET

### 23. Empleados que no han realizado ninguna venta en 2023.

Endpoint: 
```bash
http://localhost:8000/get/endpoint23
```

Método: GET

### 24. Proveedor que ha suministrado más medicamentos en 2023.

Endpoint: 
```bash
http://localhost:8000/get/endpoint24
```

Método: GET

### 25. Pacientes que compraron el medicamento “Paracetamol” en 2023.

Endpoint: 
```bash
http://localhost:8000/get/endpoint25
```

Método: GET

### 26. Total de medicamentos vendidos por mes en 2023.

Endpoint: 
```bash
http://localhost:8000/get/endpoint26
```

Método: GET

### 27. Empleados con menos de 5 ventas en 2023.

Endpoint: 
```bash
http://localhost:8000/get/endpoint27
```

Método: GET

### 28. Número total de proveedores que suministraron medicamentos en 2023.

Endpoint: 
```bash
http://localhost:8000/get/endpoint28
```

Método: GET

### 29. Proveedores de los medicamentos con menos de 50 unidades en stock.

Endpoint: 
```bash
http://localhost:8000/get/endpoint29
```

Método: GET

### 30. Pacientes que no han comprado ningún medicamento en 2023.

Endpoint: 
```bash
http://localhost:8000/get/endpoint30
```

Método: GET

### 31. Medicamentos que han sido vendidos cada mes del año 2023.

Endpoint: 
```bash
http://localhost:8000/get/endpoint31
```

Método: GET

### 32. Empleado que ha vendido la mayor cantidad de medicamentos distintos en 2023.

Endpoint: 
```bash
http://localhost:8000/get/endpoint32
```

Método: GET

### 33. Total gastado por cada paciente en 2023.

Endpoint: 
```bash
http://localhost:8000/get/endpoint33
```

Método: GET

### 34. Medicamentos que no han sido vendidos en 2023.

Endpoint: 
```bash
http://localhost:8000/get/endpoint34
```

Método: GET

### 35. Proveedores que han suministrado al menos 5 medicamentos diferentes en 2023.

Endpoint: 
```bash
http://localhost:8000/get/endpoint35
```

Método: GET

### 36. Total de medicamentos vendidos en el primer trimestre de 2023.

Endpoint: 
```bash
http://localhost:8000/get/endpoint36
```

Método: GET

### 37. Empleados que no realizaron ventas en abril de 2023.

Endpoint: 
```bash
http://localhost:8000/get/endpoint37
```

Método: GET

### 38. Medicamentos con un precio mayor a 50 y un stock menor a 100.

Endpoint: 
```bash
http://localhost:8000/get/endpoint38
```

Método: GET
