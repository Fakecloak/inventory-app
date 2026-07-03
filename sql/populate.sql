INSERT INTO categories (name, description)
VALUES
('CPU', 'Processors'),
('GPU', 'Graphics Cards'),
('RAM', 'Memory Modules'),
('SSD', 'Storage Devices'),
('Motherboard', 'Motherboards'),
('PSU', 'Power Supplies'),
('Cooler', 'CPU Coolers'),
('Cabinet', 'PC Cases');

INSERT INTO items
(name, description, manufacturer, price, stock_quantity, category_id)
VALUES
('Ryzen 7 7800X3D', 'Gaming processor with 3D V-Cache', 'AMD', 39999.99, 5, 1),
('Ryzen 9 9950X', '16-core flagship processor', 'AMD', 62999.99, 3, 1),
('Core i7-14700K', '20-core gaming processor', 'Intel', 38999.99, 6, 1),

('RTX 5070', 'High-end gaming graphics card', 'NVIDIA', 69999.99, 4, 2),
('RTX 5080', 'Enthusiast class graphics card', 'NVIDIA', 99999.99, 2, 2),
('RX 9070 XT', 'AMD flagship graphics card', 'AMD', 74999.99, 3, 2),

('Ripjaws S5 DDR5 32GB 6000MHz', 'DDR5 CL30 memory kit', 'G.Skill', 10999.99, 10, 3),
('Corsair Vengeance DDR5 32GB', 'High performance DDR5 memory', 'Corsair', 11499.99, 8, 3),

('Samsung 990 Pro 1TB', 'PCIe Gen4 NVMe SSD', 'Samsung', 9499.99, 7, 4),
('WD Black SN850X 2TB', 'High speed gaming SSD', 'Western Digital', 14999.99, 5, 4),

('MSI B850M Gaming Plus', 'AM5 Micro-ATX motherboard', 'MSI', 17999.99, 4, 5),
('ASUS TUF B650 Plus WiFi', 'AM5 motherboard with WiFi', 'ASUS', 19499.99, 3, 5),

('RM850e', '850W fully modular PSU', 'Corsair', 11499.99, 6, 6),
('MWE Gold 750 V2', '750W Gold certified PSU', 'Cooler Master', 7999.99, 8, 6),

('Liquid Freezer III 240', '240mm liquid cooler', 'Arctic', 9999.99, 4, 7),
('AK620 Digital', 'Dual tower air cooler', 'DeepCool', 6499.99, 7, 7),

('Lancool 216', 'High airflow PC case', 'Lian Li', 8499.99, 5, 8),
('H6 Flow', 'Dual chamber airflow case', 'NZXT', 10499.99, 3, 8);