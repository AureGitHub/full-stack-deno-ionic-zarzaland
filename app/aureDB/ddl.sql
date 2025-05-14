-- DROP SCHEMA public;

DROP TABLE IF EXISTS public."User";
DROP TABLE IF EXISTS public."TC_UserRole";
DROP TABLE IF EXISTS public."TC_UserEstado";



DROP TABLE IF EXISTS finanzas.dividendo;
DROP TABLE IF EXISTS finanzas.compra;
DROP TABLE IF EXISTS finanzas.venta;
DROP TABLE IF EXISTS finanzas.cartera;
DROP TABLE IF EXISTS finanzas.empresa;




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





CREATE TABLE finanzas.empresa (
	id serial4 NOT NULL,
	descripcion text NOT NULL,	
	abreviatura text NOT NULL,
	color text NOT NULL,
	CONSTRAINT empresa_pkey PRIMARY KEY (id)
);
CREATE UNIQUE INDEX accion_descripcion_key ON finanzas.empresa USING btree (descripcion);



CREATE TABLE finanzas.cartera (
	id serial4 NOT NULL,
	empresaid int4 NOT NULL,
	CONSTRAINT "cartera_empresa_fkey" FOREIGN KEY (empresaid) REFERENCES finanzas.empresa(id) ON DELETE RESTRICT ON UPDATE CASCADE,
	fecha timestamp(3) DEFAULT CURRENT_TIMESTAMP NOT NULL,
	acciones numeric(15, 6) DEFAULT 0 NOT NULL,
	beneficios numeric(15, 6) DEFAULT 0 NOT NULL,
	CONSTRAINT cartera_pkey PRIMARY KEY (id)
);


CREATE TABLE finanzas.compra (
	id serial4 NOT NULL,
	carteraid int4 NOT NULL,
	CONSTRAINT "compra_cartera_fkey" FOREIGN KEY (carteraid) REFERENCES finanzas.cartera(id) ON DELETE RESTRICT ON UPDATE CASCADE,
	fecha timestamp(3) DEFAULT CURRENT_TIMESTAMP NOT NULL,
	acciones numeric(15, 6) DEFAULT 0 NOT NULL,
	precio numeric(15, 6) DEFAULT 0 NOT NULL,
	impuestos numeric(15, 6) DEFAULT 0 NOT NULL,
	comision numeric(15, 6) DEFAULT 0 NOT NULL,
	total numeric(15, 6) DEFAULT 0 NOT NULL,	
	CONSTRAINT compra_pkey PRIMARY KEY (id)
);



CREATE TABLE finanzas.venta (
	id serial4 NOT NULL,
	carteraid int4 NOT NULL,
	CONSTRAINT "venta_cartera_fkey" FOREIGN KEY (carteraid) REFERENCES finanzas.cartera(id) ON DELETE RESTRICT ON UPDATE CASCADE,
	fecha timestamp(3) DEFAULT CURRENT_TIMESTAMP NOT NULL,
	acciones numeric(15, 6) DEFAULT 0 NOT NULL,
	precio numeric(15, 6) DEFAULT 0 NOT NULL,
	impuestos numeric(15, 6) DEFAULT 0 NOT NULL,
	comision numeric(15, 6) DEFAULT 0 NOT NULL,
	total numeric(15, 6) DEFAULT 0 NOT NULL,	
	CONSTRAINT venta_pkey PRIMARY KEY (id)
);

CREATE TABLE finanzas.dividendo (
	id serial4 NOT NULL,
	carteraid int4 NOT NULL,
	CONSTRAINT "dividendo_cartera_fkey" FOREIGN KEY (carteraid) REFERENCES finanzas.cartera(id) ON DELETE RESTRICT ON UPDATE CASCADE,
	fecha timestamp(3) DEFAULT CURRENT_TIMESTAMP NOT NULL,
	acciones numeric(15, 6) DEFAULT 0 NOT NULL,	
	precio numeric(15, 6) DEFAULT 0 NOT NULL,
	impuestos numeric(15, 6) DEFAULT 0 NOT NULL,	
	total numeric(15, 6) DEFAULT 0 NOT NULL,	
	CONSTRAINT dividendo_pkey PRIMARY KEY (id)
);

CREATE TABLE finanzas.fondo (
	id serial4 NOT NULL,
	empresaid int4 NOT NULL,
	CONSTRAINT "fondo_empresa_fkey" FOREIGN KEY (empresaid) REFERENCES finanzas.empresa(id) ON DELETE RESTRICT ON UPDATE CASCADE,
	fechainicio timestamp(3) DEFAULT CURRENT_TIMESTAMP NOT NULL,
	fechafin timestamp(3) DEFAULT CURRENT_TIMESTAMP NOT NULL,
	importe numeric(9, 2) DEFAULT 0 NOT NULL,
	interes numeric(9, 2) DEFAULT 0 NOT NULL,
	beneficios numeric(15, 6) DEFAULT 0 NOT NULL,
	CONSTRAINT fondo_pkey PRIMARY KEY (id)
);

CREATE TABLE finanzas.fondoxmes (
	id serial4 NOT NULL,
	fondoid int4 NOT NULL,
	CONSTRAINT "fondo_empresa_fkey" FOREIGN KEY (fondo) REFERENCES finanzas.fondo(id) ON DELETE RESTRICT ON UPDATE CASCADE,
	anno numeric(9, 2) DEFAULT 0 NOT NULL,
	mes numeric(9, 2) DEFAULT 0 NOT NULL,
	importe numeric(15, 6) DEFAULT 0 NOT NULL,
	CONSTRAINT fondoxmes_pkey PRIMARY KEY (id)
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
	CONSTRAINT gasto_tipo_pkey PRIMARY KEY (id)
);
CREATE UNIQUE INDEX gasto_tipo_descripcion_key ON finanzas.empresa USING btree (descripcion);


CREATE TABLE casa.gasto (
	id serial4 NOT NULL,
	gastotipoid int4 NOT NULL,
	CONSTRAINT "cartera_empresa_fkey" FOREIGN KEY (gastotipoid) REFERENCES casa.gasto_tipo(id) ON DELETE RESTRICT ON UPDATE CASCADE,
	fecha timestamp(3) DEFAULT CURRENT_TIMESTAMP NOT NULL,
	importe numeric (9, 2) DEFAULT 0 NOT NULL,
	observaciones text  null,	
	CONSTRAINT gasto_pkey PRIMARY KEY (id)
);



CREATE TABLE casa.evento_tipo (
	id serial4 NOT NULL,
	descripcion text NOT NULL,	
	color text NOT NULL,	
	bkcolor text NOT NULL,	
	CONSTRAINT evento_tipo_pkey PRIMARY KEY (id)
);
CREATE UNIQUE INDEX gasto_tipo_descripcion_key ON casa.evento_tipo USING btree (descripcion);


CREATE TABLE casa.evento (
	id serial4 NOT NULL,
	eventotipoid int4 NOT NULL,
	CONSTRAINT "evento_evento_tipo_fkey" FOREIGN KEY (eventotipoid) REFERENCES casa.evento_tipo(id) ON DELETE RESTRICT ON UPDATE CASCADE,
	fecha timestamp(3) DEFAULT CURRENT_TIMESTAMP NOT NULL,	
	observaciones text  null,	
	CONSTRAINT gasto_pkey PRIMARY KEY (id)
);


CREATE TABLE inmueble.catastro_tipo(	
	id serial4 NOT NULL,
	descripcion text NOT NULL,		
	CONSTRAINT catastro_tipo_pkey PRIMARY KEY (id)
);
CREATE UNIQUE INDEX catastro_tipo_descripcion_key ON inmueble.catastro_tipo USING btree (descripcion);

CREATE TABLE inmueble.catastro (
	id serial4 NOT NULL,
	catastrotipoid int4 DEFAULT 2 NOT NULL,
	CONSTRAINT "catastro_catastro_tipo_fkey" FOREIGN KEY (catastrotipoid) REFERENCES inmueble.catastro_tipo(id) ON DELETE RESTRICT ON UPDATE CASCADE,
	felipe boolean  DEFAULT true  not null,
	referenciacatastral text not null,
	direccion text not null,	
	poligono text null,	
	parcela text null,	
	superficieconstruida numeric (9, 2)  DEFAULT 0  not null,
	superficieparcela numeric (9, 2) DEFAULT 0 not null,
	uso text not null,
	valorsuelo numeric (9, 2) not null,
	valorconstruccion numeric (9, 2) not null,
	valorcatastral numeric (9, 2) not null,
	CONSTRAINT catastro_pkey PRIMARY KEY (id)
);



CREATE TABLE inmueble.arriendo (
	id serial4 NOT NULL,
	catastroid int4 DEFAULT 2 NOT NULL,
	CONSTRAINT "arriendo_catastro_fkey" FOREIGN KEY (catastroid) REFERENCES inmueble.catastro(id) ON DELETE RESTRICT ON UPDATE CASCADE,
	fechapago timestamp(3) DEFAULT CURRENT_TIMESTAMP NOT NULL,
	fechainicio timestamp(3) DEFAULT CURRENT_TIMESTAMP NOT NULL,
	fechafin timestamp(3) DEFAULT CURRENT_TIMESTAMP NOT NULL,	
	importe numeric(9, 2) DEFAULT 0 NOT NULL,
	quien text not null,
	observaciones text  null,	
	CONSTRAINT arriendo_pkey PRIMARY KEY (id)
);




