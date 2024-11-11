-- DROP SCHEMA public;

DROP TABLE IF EXISTS public."User";
DROP TABLE IF EXISTS public."TC_UserRole";
DROP TABLE IF EXISTS public."TC_UserEstado";
DROP TABLE IF EXISTS public."accion_venta";
DROP TABLE IF EXISTS public."accion_compra";
DROP TABLE IF EXISTS public."accion_compra_venta";
DROP TABLE IF EXISTS public."empresa";







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





CREATE TABLE public.accion (
	id serial4 NOT NULL,
	descripcion text NOT NULL,	
	"createdAt" timestamp(3) DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updatedAt" timestamp(3) NOT NULL,
	CONSTRAINT accion_pkey PRIMARY KEY (id)
);
CREATE UNIQUE INDEX accion_descripcion_key ON public.accion USING btree (descripcion);


CREATE TABLE public.accion_compra (
	id serial4 NOT NULL,
	empresaid int4 NOT NULL,
	CONSTRAINT "accion_compra_accion_fkey" FOREIGN KEY (empresaid) REFERENCES public."empresa"(id) ON DELETE RESTRICT ON UPDATE CASCADE,
	fecha timestamp(3) DEFAULT CURRENT_TIMESTAMP NOT NULL,
	acciones numeric(9, 6) DEFAULT 0 NOT NULL,
	precio numeric(9, 2) DEFAULT 0 NOT NULL,
	impuestos numeric(9, 2) DEFAULT 0 NOT NULL,
	comision numeric(9, 2) DEFAULT 0 NOT NULL,
	total numeric(9, 2) DEFAULT 0 NOT NULL,	
	"createdAt" timestamp(3) DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updatedAt" timestamp(3) NOT NULL,
	CONSTRAINT accion_compra_pkey PRIMARY KEY (id)
);


CREATE TABLE public.accion_venta (
	id serial4 NOT NULL,
	fecha timestamp(3) DEFAULT CURRENT_TIMESTAMP NOT NULL,
	acciones numeric(9, 6) DEFAULT 0 NOT NULL,
	precio numeric(9, 2) DEFAULT 0 NOT NULL,
	impuestos numeric(9, 2) DEFAULT 0 NOT NULL,
	comision numeric(9, 2) DEFAULT 0 NOT NULL,
	total numeric(9, 2) DEFAULT 0 NOT NULL,	
	"createdAt" timestamp(3) DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updatedAt" timestamp(3) NOT NULL,
	CONSTRAINT accion_venta_pkey PRIMARY KEY (id)
);


CREATE TABLE public.accion_compra_venta (
	id serial4 NOT NULL,	
	compraid int4 NOT NULL,
	CONSTRAINT "accion_compra_accion_fkey1" FOREIGN KEY (compraid) REFERENCES public."accion_compra"(id) ON DELETE RESTRICT ON UPDATE CASCADE,
	ventaid int4 NOT NULL,
	CONSTRAINT "accion_venta_fkey" FOREIGN KEY (ventaid) REFERENCES public."accion_venta"(id) ON DELETE RESTRICT ON UPDATE CASCADE,
	"createdAt" timestamp(3) DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updatedAt" timestamp(3) NOT NULL,
	CONSTRAINT accion_compra_venta_pkey PRIMARY KEY (id)
);
