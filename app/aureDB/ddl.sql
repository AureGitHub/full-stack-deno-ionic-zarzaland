-- DROP SCHEMA public;

DROP TABLE IF EXISTS public."User";
DROP TABLE IF EXISTS public."TC_UserRole";
DROP TABLE IF EXISTS public."TC_UserEstado";



DROP TABLE IF EXISTS bolsa.dividendo;
DROP TABLE IF EXISTS bolsa.compra;
DROP TABLE IF EXISTS bolsa.venta;
DROP TABLE IF EXISTS bolsa.cartera;
DROP TABLE IF EXISTS bolsa.empresa;




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





CREATE TABLE bolsa.empresa (
	id serial4 NOT NULL,
	descripcion text NOT NULL,	
	abreviatura text NOT NULL,
	color text NOT NULL,
	CONSTRAINT empresa_pkey PRIMARY KEY (id)
);
CREATE UNIQUE INDEX accion_descripcion_key ON bolsa.empresa USING btree (descripcion);



CREATE TABLE bolsa.cartera (
	id serial4 NOT NULL,
	empresaid int4 NOT NULL,
	CONSTRAINT "cartera_empresa_fkey" FOREIGN KEY (empresaid) REFERENCES bolsa.empresa(id) ON DELETE RESTRICT ON UPDATE CASCADE,
	fecha timestamp(3) DEFAULT CURRENT_TIMESTAMP NOT NULL,
	acciones numeric(15, 6) DEFAULT 0 NOT NULL,
	beneficios numeric(15, 6) DEFAULT 0 NOT NULL,
	CONSTRAINT cartera_pkey PRIMARY KEY (id)
);


CREATE TABLE bolsa.compra (
	id serial4 NOT NULL,
	carteraid int4 NOT NULL,
	CONSTRAINT "compra_cartera_fkey" FOREIGN KEY (carteraid) REFERENCES bolsa.cartera(id) ON DELETE RESTRICT ON UPDATE CASCADE,
	fecha timestamp(3) DEFAULT CURRENT_TIMESTAMP NOT NULL,
	acciones numeric(15, 6) DEFAULT 0 NOT NULL,
	precio numeric(15, 6) DEFAULT 0 NOT NULL,
	impuestos numeric(15, 6) DEFAULT 0 NOT NULL,
	comision numeric(15, 6) DEFAULT 0 NOT NULL,
	total numeric(15, 6) DEFAULT 0 NOT NULL,	
	CONSTRAINT compra_pkey PRIMARY KEY (id)
);



CREATE TABLE bolsa.venta (
	id serial4 NOT NULL,
	carteraid int4 NOT NULL,
	CONSTRAINT "venta_cartera_fkey" FOREIGN KEY (carteraid) REFERENCES bolsa.cartera(id) ON DELETE RESTRICT ON UPDATE CASCADE,
	fecha timestamp(3) DEFAULT CURRENT_TIMESTAMP NOT NULL,
	acciones numeric(15, 6) DEFAULT 0 NOT NULL,
	precio numeric(15, 6) DEFAULT 0 NOT NULL,
	impuestos numeric(15, 6) DEFAULT 0 NOT NULL,
	comision numeric(15, 6) DEFAULT 0 NOT NULL,
	total numeric(15, 6) DEFAULT 0 NOT NULL,	
	CONSTRAINT venta_pkey PRIMARY KEY (id)
);

CREATE TABLE bolsa.dividendo (
	id serial4 NOT NULL,
	carteraid int4 NOT NULL,
	CONSTRAINT "dividendo_cartera_fkey" FOREIGN KEY (carteraid) REFERENCES bolsa.cartera(id) ON DELETE RESTRICT ON UPDATE CASCADE,
	fecha timestamp(3) DEFAULT CURRENT_TIMESTAMP NOT NULL,
	acciones numeric(15, 6) DEFAULT 0 NOT NULL,	
	precio numeric(15, 6) DEFAULT 0 NOT NULL,
	impuestos numeric(15, 6) DEFAULT 0 NOT NULL,	
	total numeric(15, 6) DEFAULT 0 NOT NULL,	
	CONSTRAINT dividendo_pkey PRIMARY KEY (id)
);

CREATE TABLE bolsa.fondo (
	id serial4 NOT NULL,
	empresaid int4 NOT NULL,
	CONSTRAINT "fondo_empresa_fkey" FOREIGN KEY (empresaid) REFERENCES bolsa.empresa(id) ON DELETE RESTRICT ON UPDATE CASCADE,
	fechainicio timestamp(3) DEFAULT CURRENT_TIMESTAMP NOT NULL,
	fechafin timestamp(3) DEFAULT CURRENT_TIMESTAMP NOT NULL,
	importe numeric(9, 2) DEFAULT 0 NOT NULL,
	interes numeric(9, 2) DEFAULT 0 NOT NULL,
	beneficios numeric(15, 6) DEFAULT 0 NOT NULL,
	CONSTRAINT fondo_pkey PRIMARY KEY (id)
);



CREATE TABLE casa.compra_producto (
	id serial4 NOT NULL,
	descripcion text NOT NULL,
	CONSTRAINT producto_pkey PRIMARY KEY (id)
);
CREATE UNIQUE INDEX producto_descripcion_key ON casa.compra_producto USING btree (descripcion);


CREATE TABLE casa.compra_producto_selected (
	id int4 NOT NULL,	
	CONSTRAINT "compra_producto_selected_compra_producto_fkey" FOREIGN KEY (id) REFERENCES casa.compra_producto(id) ON DELETE RESTRICT ON UPDATE cascade,
	CONSTRAINT compra_producto_selected_pkey PRIMARY KEY (id)
)


CREATE TABLE casa.gasto_tipo (
	id serial4 NOT NULL,
	descripcion text NOT NULL,	
	CONSTRAINT empresa_pkey PRIMARY KEY (id)
);
CREATE UNIQUE INDEX gasto_tipo_descripcion_key ON bolsa.empresa USING btree (descripcion);


CREATE TABLE casa.gasto (
	id serial4 NOT NULL,
	gastotipoid int4 NOT NULL,
	CONSTRAINT "cartera_empresa_fkey" FOREIGN KEY (gastotipoid) REFERENCES casa.gasto_tipo(id) ON DELETE RESTRICT ON UPDATE CASCADE,
	fecha timestamp(3) DEFAULT CURRENT_TIMESTAMP NOT NULL,
	importe numeric (9, 2) DEFAULT 0 NOT NULL,
	observaciones text  null,	
	CONSTRAINT gasto_pkey PRIMARY KEY (id)
);


