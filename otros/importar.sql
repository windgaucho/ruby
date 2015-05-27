load data infile 'c:\\temp\\ruby\\articulos1.csv' into table articulos
FIELDS TERMINATED BY ';'
(codigo, descripcion, @precio, codigoprov)
set precio = replace(@precio, ',', '.'),
createdAt = now(),
updatedAt = now()
