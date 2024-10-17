-- DROP SCHEMA public;

DROP TABLE IF EXISTS public."User";
DROP TABLE IF EXISTS public."TC_UserRole";
DROP TABLE IF EXISTS public."TC_UserEstado";

DROP TABLE IF EXISTS public."servicio";
DROP TABLE IF EXISTS public."empleada";




-- DROP TABLE public."TC_UserEstado";

CREATE TABLE public."TC_UserEstado" (
	id int4 NOT NULL,
	descripcion text NOT NULL,
	CONSTRAINT "TC_UserEstado_pkey" PRIMARY KEY (id)
);
CREATE UNIQUE INDEX "TC_UserEstado_descripcion_key" ON public."TC_UserEstado" USING btree (descripcion);


-- public."TC_UserRole" definition

-- Drop table

-- DROP TABLE public."TC_UserRole";

CREATE TABLE public."TC_UserRole" (
	id int4 NOT NULL,
	descripcion text NOT NULL,
	CONSTRAINT "TC_UserRole_pkey" PRIMARY KEY (id)
);
CREATE UNIQUE INDEX "TC_UserRole_descripcion_key" ON public."TC_UserRole" USING btree (descripcion);


-- public."cartaCategoria" definition

-- Drop table

-- DROP TABLE public."cartaCategoria";

-- public."User" definition

-- Drop table

-- DROP TABLE public."User";

CREATE TABLE public."User" (
	id int4 NOT NULL,
	"name" text NOT NULL,
	email text NOT NULL,
	"password" text NOT NULL,
	estadoid int4 NOT NULL,
	roleid int4 NOT NULL,
	CONSTRAINT "User_pkey" PRIMARY KEY (id),
	CONSTRAINT "User_estadoid_fkey" FOREIGN KEY (estadoid) REFERENCES public."TC_UserEstado"(id) ON DELETE RESTRICT ON UPDATE CASCADE,
	CONSTRAINT "User_roleid_fkey" FOREIGN KEY (roleid) REFERENCES public."TC_UserRole"(id) ON DELETE RESTRICT ON UPDATE CASCADE
);
CREATE UNIQUE INDEX "User_email_key" ON public."User" USING btree (email);






-- public.empleada definition

-- Drop table

-- DROP TABLE public.empleada;

CREATE TABLE public.empleada (
	id serial4 NOT NULL,
	nombre text NOT NULL,
	baja bool NOT NULL,
	"createdAt" timestamp(3) DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updatedAt" timestamp(3) NOT NULL,
	CONSTRAINT empleada_pkey PRIMARY KEY (id)
);
CREATE UNIQUE INDEX empleada_nombre_key ON public.empleada USING btree (nombre);



-- public.servicio definition

-- Drop table

-- DROP TABLE public.servicio;

CREATE TABLE public.servicio (
	id serial4 NOT NULL,
	fecha date NOT NULL,
	"horaInicio" time NOT NULL,
	"horaFin" time NOT NULL,
	"suplLevantar" bool DEFAULT false NOT NULL,
	"empleadaId" int4 NOT NULL,
	pagado bool DEFAULT false NOT NULL,
	horas int4 NOT NULL,
	minutos int4 NOT NULL,
	importe numeric(9, 2) NOT NULL,
	observacion text NULL,
	"createdAt" timestamp(3) DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updatedAt" timestamp(3) NOT NULL,
	CONSTRAINT servicio_pkey PRIMARY KEY (id)
);


-- public.servicio foreign keys

ALTER TABLE public.servicio ADD CONSTRAINT "servicio_empleadaId_fkey" FOREIGN KEY ("empleadaId") REFERENCES public.empleada(id) ON DELETE RESTRICT ON UPDATE CASCADE;