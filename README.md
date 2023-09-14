# App de Citas EPS

## API Reference

#### 1. Obtener todos los pacientes de manera alfabética.

```bash
  GET /api/v1/usuarios
```
#### 2. Obtener las citas de una fecha en específico, donde se ordene los pacientes de manera alfabética.

```bash
  GET /api/v1/citas/buscar-por-fecha/ordenado/${fecha}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `fecha`   | `string` | **Requerido**. Fecha a buscar. |

#### 3. Obtener todos los médicos de una especialidad en específico (por ejemplo, ‘Cardiología’).

```bash
  GET /api/v1/medicos/especialidad?esp=${especialidad}
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `especialidad`   | `string` | **Requerido** Especialidad a buscar|

Es sensible a tildes y signos de puntuación.

#### 4. Encontrar la próxima cita para un paciente en específico (por ejemplo, el paciente con user_id 1).

```bash
  GET /api/v1/citas/programadas/${doc}
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `doc`   | `string` | **Requerido**. Documento del paciente|

Usar doc '9876543210' para ver mejor el funcionamiento

#### 5. Encontrar todos los pacientes que tienen citas con un médico en específico

```bash
  GET /api/v1/citas/doctores/${doctor}
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `doctor`   | `string` | **Requerido**. Nombre del doctor |

Es sensible a tildes y signos de puntuación.

#### 6. Encontrar todas las citas de un día en específico (por ejemplo, ‘2023-07-12’).

```bash
  GET /api/v1/citas/buscar-por-fecha/${fecha}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `fecha`   | `string` | **Requerido**. Fecha a buscar. |

