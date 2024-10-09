-- TABLAS BASE

CREATE TABLE usuario (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre_usuario CHAR VARYING (100) NOT NULL,
    documento_usuario CHAR VARYING (100) NOT NULL,
    activo BOOLEAN NOT NULL,
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    fecha_modificacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT unique_documento_usuario UNIQUE (documento_usuario)
)

CREATE TABLE rol (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre_rol CHAR VARYING (100) NOT NULL,
    activo BOOLEAN NOT NULL,
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    fecha_modificacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT unique_nombre_rol UNIQUE (nombre_rol)
)

CREATE TABLE empresa (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre_empresa CHAR VARYING (100) NOT NULL,
    nit_empresa CHAR VARYING (100) NOT NULL,
    activo BOOLEAN NOT NULL,
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    fecha_modificacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT unique_nombre_empresa UNIQUE (nombre_empresa),
    CONSTRAINT unique_nit_empresa UNIQUE (nit_empresa)
)

CREATE TABLE punto_venta (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre_punto_venta CHAR VARYING (100) NOT NULL,
    direccion_punto_venta CHAR VARYING (100) NOT NULL,
    activo BOOLEAN NOT NULL,
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    fecha_modificacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT unique_nombre_punto_venta UNIQUE (nombre_punto_venta)
)

-- TABLAS INTERMEDIAS

CREATE TABLE usuario_empresa (
    id INT PRIMARY KEY AUTO_INCREMENT,
    id_usuario INT NOT NULL,
    id_empresa INT NOT NULL,
    activo BOOLEAN NOT NULL,
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    fecha_modificacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT fk_usuario_empresa_usuario FOREIGN KEY (id_usuario) REFERENCES usuario (id),
    CONSTRAINT fk_usuario_empresa_empresa FOREIGN KEY (id_empresa) REFERENCES empresa (id)
)

CREATE TABLE rol_usuario_empresa (
    id INT PRIMARY KEY AUTO_INCREMENT,
    id_rol INT NOT NULL,
    id_usuario INT NOT NULL,
    id_empresa INT NOT NULL,
    activo BOOLEAN NOT NULL,
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    fecha_modificacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT fk_rol_usuario_empresa_rol FOREIGN KEY (id_rol) REFERENCES rol (id),
    CONSTRAINT fk_rol_usuario_empresa_usuario FOREIGN KEY (id_usuario) REFERENCES usuario (id),
    CONSTRAINT fk_rol_usuario_empresa_empresa FOREIGN KEY (id_empresa) REFERENCES empresa (id)
)

CREATE TABLE empresa_punto_venta (
    id INT PRIMARY KEY AUTO_INCREMENT,
    id_empresa INT NOT NULL,
    id_punto_venta INT NOT NULL,
    activo BOOLEAN NOT NULL,
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    fecha_modificacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT fk_empresa_punto_venta_empresa FOREIGN KEY (id_empresa) REFERENCES empresa (id),
    CONSTRAINT fk_empresa_punto_venta_punto_venta FOREIGN KEY (id_punto_venta) REFERENCES punto_venta (id)
)
