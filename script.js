let productos = [
    { id: 1, marca: "Fiat", nombre: "Cronos", Stock: 4, precio: 23500, año: 2023, imagenUrl: "https://www.karvi.com.ar/_next/image/?url=https%3A%2F%2Fdjdnloyvqzzd3.cloudfront.net%2Fstatic%2Fgallery%2Far%2Fdesktop%2Ffiat_cronos_2022_perfil_frente.jpg&w=1024&q=90" },
    { id: 2, marca: "Fiat", nombre: "Pulse", Stock: 3, precio: 18500, año: 2022, imagenUrl: "https://www.karvi.com.ar/_next/image/?url=https%3A%2F%2Fdjdnloyvqzzd3.cloudfront.net%2Fstatic%2Fgallery%2Far%2Fdesktop%2Ffiat_pulse_2022_perfil_frente.jpg&w=1024&q=90" },
    { id: 3, marca: "Fiat", nombre: "Strada", Stock: 3, precio: 20040, año:2021, imagenUrl: "https://www.karvi.com.ar/_next/image/?url=https%3A%2F%2Fdjdnloyvqzzd3.cloudfront.net%2Fstatic%2Fgallery%2Far%2Fdesktop%2Ffiat_strada_2022_perfil_frente.jpg&w=1024&q=90" },
    { id: 4, marca: "Nissan", nombre: "Frontier", Stock: 4, precio: 10500, año:2020, imagenUrl: "https://www.karvi.com.ar/_next/image/?url=https%3A%2F%2Fdjdnloyvqzzd3.cloudfront.net%2Fstatic%2Fgallery%2Far%2Fdesktop%2Fnissan_nueva_frontier_plano_detalle.jpg&w=1024&q=90"  },
    { id: 5, marca: "Nissan", nombre: "Sentra", Stock: 5, precio: 18500, año:2010, imagenUrl: "https://www.karvi.com.ar/_next/image/?url=https%3A%2F%2Fdjdnloyvqzzd3.cloudfront.net%2Fstatic%2Fgallery%2Far%2Fdesktop%2Fnissan_nuevo_sentra_perfil_frente.jpg&w=1024&q=90"  },
    { id: 6, marca: "Toyota", nombre: "Corolla", Stock: 3, precio: 16600, año:2020, imagenUrl: "https://www.karvi.com.ar/_next/image/?url=https%3A%2F%2Fdjdnloyvqzzd3.cloudfront.net%2Fstatic%2Fgallery%2Far%2Fdesktop%2Ftoyota_corolla_2022_perfil_trasero.jpg&w=1024&q=90"  },
    { id: 7, marca: "Toyota", nombre: "hilux", Stock: 5, precio: 17600, año:2015, imagenUrl: "https://cdn.motor1.com/images/mgl/X4qJp/s1/lanzamiento-toyota-hilux-2016.webp"},
    {id: 8,marca: "Toyota",nombre: "Yaris-hatchback",Stock: 6,precio: 16650, año:2021, imagenUrl: "https://www.karvi.com.ar/_next/image/?url=https%3A%2F%2Fdjdnloyvqzzd3.cloudfront.net%2Fstatic%2Fgallery%2Far%2Fdesktop%2Ftoyota_yaris_hatchback_perfil_frente.jpg&w=1024&q=90" },
    { id: 9, marca: "Ford", nombre: "Fiesta", Stock: 3, precio: 15560, año:2020, imagenUrl: "https://cdn.motor1.com/images/mgl/lEEP6E/s1/ford-fiesta-2021.jpg"  },
    { id: 10, marca: "Ford", nombre: "Maverick", Stock: 1, precio: 20560, año:2021, imagenUrl: "https://www.karvi.com.ar/_next/image/?url=https%3A%2F%2Fdjdnloyvqzzd3.cloudfront.net%2Fstatic%2Fgallery%2Far%2Fdesktop%2Fford_maverick_2022_perfil_frente.jpg&w=1024&q=90"  },
    { id: 11, marca: "Ford", nombre: "Focus", Stock: 2, precio: 10560, año:2010, imagenUrl: "https://www.karvi.com.ar/_next/image/?url=https%3A%2F%2Fdjdnloyvqzzd3.cloudfront.net%2Fstatic%2Fgallery%2Far%2Fdesktop%2Fford_focus_5p_plano_detalle.jpg&w=1024&q=90"  },
    { id: 12, marca: "Chevrolet", nombre: "Equinox", Stock: 3, precio: 12000, año:2022, imagenUrl: "https://www.karvi.com.ar/_next/image/?url=https%3A%2F%2Fdjdnloyvqzzd3.cloudfront.net%2Fstatic%2Fgallery%2Far%2Fdesktop%2Fchevrolet_equinox_perfil_frente.jpg&w=1024&q=90"  },
    { id: 13, marca: "Chevrolet", nombre: "Cruze", Stock: 2, precio: 16200, año:2021, imagenUrl: "https://www.karvi.com.ar/_next/image/?url=https%3A%2F%2Fdjdnloyvqzzd3.cloudfront.net%2Far%2Fmodels%2Fchevrolet%2Fcruze%2Fdesktop%2Fthumbnail%2Fchevrolet-cruze_thumbnail.jpg&w=1024&q=75"  },
    { id: 14, marca: "Peugeot", nombre: "3008", Stock: 2, precio: 55300, año:2022, imagenUrl: "https://www.karvi.com.ar/_next/image/?url=https%3A%2F%2Fdjdnloyvqzzd3.cloudfront.net%2Fstatic%2Fgallery%2Far%2Fdesktop%2Fpeugeot_3008_2022_perfil_frente.jpg&w=1024&q=90" },
    { id: 15, marca: "Peugeot", nombre: "Partner-Furgon", Stock: 4, precio: 25300, año:2023, imagenUrl: "https://www.karvi.com.ar/_next/image/?url=https%3A%2F%2Fdjdnloyvqzzd3.cloudfront.net%2Far%2Fmodels%2Fpeugeot%2Fpartner-furg%25C3%25B3n%2Fdesktop%2Fthumbnail%2Fpeugeot-partner-furg%25C3%25B3n_thumbnail.jpg&w=1024&q=75"  },
    { id: 16, marca: "Peugeot", nombre: "2008", Stock: 3, precio: 30300, año:2021, imagenUrl: "https://www.karvi.com.ar/_next/image/?url=https%3A%2F%2Fdjdnloyvqzzd3.cloudfront.net%2Fstatic%2Fgallery%2Far%2Fdesktop%2Fpeugeot_2008_2022_perfil_frente.jpg&w=1024&q=90" },
    { id: 17, marca: "Renault", nombre: "Sandero", Stock: 1, precio: 35300, año:2010, imagenUrl: "https://www.karvi.com.ar/_next/image/?url=https%3A%2F%2Fdjdnloyvqzzd3.cloudfront.net%2Fstatic%2Fgallery%2Far%2Fdesktop%2Frenault_nuevo_sandero_plano_detalle.jpg&w=1024&q=90" },
    { id: 18, marca: "Renault", nombre: "Logan", Stock: 1, precio: 40300, año:2010, imagenUrl: "https://acroadtrip.blob.core.windows.net/catalogo-imagenes/xl/RT_V_938521ecf1d6408f92acd460132153aa.jpg" },
    { id: 19, marca: "Volkswagen", nombre: "Amarok", Stock: 2, precio: 10300, año:2019, imagenUrl: "https://acroadtrip.blob.core.windows.net/catalogo-imagenes/xl/RT_V_eb920fd356044f8b854396b536b9b78b.jpg"  },
    { id: 20, marca: "Volkswagen", nombre: "Nivus", Stock: 3, precio: 15300, año:2018, imagenUrl: "https://www.karvi.com.ar/_next/image/?url=https%3A%2F%2Fdjdnloyvqzzd3.cloudfront.net%2Fstatic%2Fgallery%2Far%2Fdesktop%2Fvolkswagen_nivus_perfil_frente.jpg&w=1024&q=90"  },
    ]
    
    
    function cargarMarcas() {
        let marcaSelect = document.getElementById('marcaSelect')
    
        let marcas = [...new Set(productos.map(vehiculo => vehiculo.marca))]
        marcas.forEach(marca => {
            let option = document.createElement('option')
            option.textContent = marca
            option.value = marca
            marcaSelect.appendChild(option)
        });
    }
    
    function cargarVehiculos(marca) {
        let vehiculosContainer = document.getElementById('vehiculos')
        vehiculosContainer.innerHTML = ''
    
        let vehiculosFiltrados = productos.filter(vehiculo => vehiculo.marca === marca)
    
        vehiculosFiltrados.forEach(vehiculo => {
            let card = document.createElement('div')
            card.classList.add('card')
    
            let imagen = document.createElement('img')
            imagen.src = vehiculo.imagenUrl
            card.appendChild(imagen)
    
            let cardContent = document.createElement('div')
            cardContent.classList.add('card-content')
    
            let nombreMarca = document.createElement('h2')
            nombreMarca.textContent = `${vehiculo.marca} ${vehiculo.nombre}`
            cardContent.appendChild(nombreMarca)
    
            let año = document.createElement('p')
            año.textContent = `Año: ${vehiculo.año}`
            cardContent.appendChild(año)
    
            let stock = document.createElement('p')
            stock.textContent = `Stock: ${vehiculo.Stock}`
            stock.id = `stock-${vehiculo.id}`
            cardContent.appendChild(stock)
    
            let precio = document.createElement('p')
            precio.textContent = `Precio: $${vehiculo.precio}`
            cardContent.appendChild(precio);
    
            let boton = document.createElement('button')
            boton.textContent = 'Agregar al Carrito'
            boton.addEventListener('click', function() {
                agregarAlCarrito(vehiculo)
            })
            cardContent.appendChild(boton)
    
            card.appendChild(cardContent)
    
            vehiculosContainer.appendChild(card)
        })
    }
    
    function actualizarStock(id) {
        let stockElement = document.getElementById(`stock-${id}`)
        let vehiculo = productos.find(v => v.id === id);
        if (stockElement && vehiculo) {
            stockElement.textContent = `Stock: ${vehiculo.Stock}`
        }
    }
    
    function actualizarEstadoCompra() {
        let comprarBtn = document.getElementById('comprar-btn')
        comprarBtn.disabled = document.getElementById('carrito-lista').children.length === 0 || !validarUsuario()
    }
    
    function validarUsuario() {
        let nombre = document.getElementById('nombre').value
        let apellido = document.getElementById('apellido').value
        let edad = document.getElementById('edad').value
        let correo = document.getElementById('correo').value
    
        return nombre && apellido && edad && correo
    }
    
    function actualizarCarrito() {
        actualizarSubtotalTotal()
        actualizarEstadoCompra()
    }
    
    function actualizarSubtotalTotal() {
        let subtotalTotal = 0
        let carritoItems = document.querySelectorAll('.carrito-item')
        carritoItems.forEach(item => {
            let subtotalElement = item.querySelector('.subtotal');
            let subtotalText = subtotalElement.textContent.replace('Subtotal: $', '')
            subtotalTotal += parseInt(subtotalText)
        })
    
        let subtotalTotalElement = document.getElementById('subtotal-total')
        if (carritoItems.length > 0) {
            subtotalTotalElement.textContent = `Subtotal Total: $${subtotalTotal}`
        } else {
            subtotalTotalElement.textContent = ''
        }
    }
    
    // Luego de agregar o eliminar un elemento del carrito, llama a actualizarCarrito()
    document.getElementById('comprar-btn').addEventListener('click', function() {
        if (validarUsuario()) {
            guardarUsuarioEnLocalStorage()
            limpiarCamposFormulario()
    
            let carrito = document.getElementById('carrito-lista');
            while (carrito.firstChild) {
                carrito.removeChild(carrito.firstChild)
            }
            alert('¡Compra realizada con éxito! Estaremos conctactandolo por correo electrico')
            actualizarEstadoCompra()
        } else {
            alert('Por favor completa todos los campos del usuario antes de realizar la compra.')
        }
    })
    
    // Función para limpiar los campos del formulario después de la compra
    function limpiarCamposFormulario() {
        document.getElementById('nombre').value = ''
        document.getElementById('apellido').value = ''
        document.getElementById('edad').value = ''
        document.getElementById('correo').value = ''
    }
    
    function agregarAlCarrito(vehiculo) {
        if (vehiculo.Stock > 0) {
            let carritoLista = document.getElementById('carrito-lista');
            let listItem = carritoLista.querySelector(`li[data-id="${vehiculo.id}"]`)
            if (listItem) {
                let cantidadSpan = listItem.querySelector('span');
                let cantidad = parseInt(cantidadSpan.textContent.replace(/[^\d]/g, ''), 10)
                cantidad++;
                cantidadSpan.textContent = `(${cantidad})`
    
                let subtotal = vehiculo.precio * cantidad;
                let subtotalSpan = listItem.querySelector('.subtotal')
                subtotalSpan.textContent = `Subtotal: $${subtotal}`
            } else {
                listItem = document.createElement('li')
                listItem.classList.add('carrito-item')
                listItem.setAttribute('data-id', vehiculo.id)
                listItem.textContent = `${vehiculo.marca} ${vehiculo.nombre} - Precio: $${vehiculo.precio} `
                let cantidadSpan = document.createElement('span')
                cantidadSpan.textContent = '(1)'
                listItem.appendChild(cantidadSpan)
    
                let subtotal = vehiculo.precio
                let subtotalSpan = document.createElement('span')
                subtotalSpan.classList.add('subtotal')
                subtotalSpan.textContent = `Subtotal: $${subtotal}`
                listItem.appendChild(subtotalSpan)
    
                let botonEliminar = document.createElement('button')
                botonEliminar.textContent = 'Eliminar'
                botonEliminar.addEventListener('click', function() {
                    listItem.remove()
                    vehiculo.Stock++
                    actualizarCarrito();
                    actualizarStock(vehiculo.id)
                });
                listItem.appendChild(botonEliminar)
                carritoLista.appendChild(listItem)
            }
            vehiculo.Stock--
            actualizarCarrito();
            actualizarStock(vehiculo.id);
        } else {
            alert(`Lo sentimos, ${vehiculo.marca} ${vehiculo.nombre} está agotado.`)
        }
        guardarCarritoEnLocalStorage();
    }
    
    function guardarUsuarioEnLocalStorage() {
        let usuario = {
            nombre: document.getElementById('nombre').value,
            apellido: document.getElementById('apellido').value,
            edad: document.getElementById('edad').value,
            correo: document.getElementById('correo').value
        }
        localStorage.setItem('usuario', JSON.stringify(usuario))
    }
    
    function cargarCarritoDesdeLocalStorage() {
        let carrito = JSON.parse(localStorage.getItem('carrito'))
        if (carrito) {
            carrito.forEach(item => {
                let vehiculo = productos.find(v => v.id === parseInt(item.id))
                if (vehiculo) {
                    vehiculo.Stock -= item.cantidad
                    agregarAlCarrito(vehiculo) 
                }
            });
        }
    }
    
    window.onload = function() {
        cargarMarcas();
        actualizarEstadoCompra()
        cargarCarritoDesdeLocalStorage()
        cargarUsuarioDesdeLocalStorage()
    };
    
    function cargarUsuarioDesdeLocalStorage() {
        let usuario = JSON.parse(localStorage.getItem('usuario'))
        if (usuario) {
            document.getElementById('nombre').value = usuario.nombre || ''
            document.getElementById('apellido').value = usuario.apellido || ''
            document.getElementById('edad').value = usuario.edad || ''
            document.getElementById('correo').value = usuario.correo || ''
        }
    }
    
    function guardarCarritoEnLocalStorage() {
        let carritoItems = document.querySelectorAll('.carrito-item')
        let carrito = []
    
        carritoItems.forEach(item => {
            let itemId = item.getAttribute('data-id')
            let itemNombre = item.textContent.split(' - ')[0]
            let itemPrecio = parseInt(item.textContent.split('$')[1])
            let itemCantidad = parseInt(item.querySelector('span').textContent.replace(/[^\d]/g, ''), 10)
            let itemSubtotal = parseInt(item.querySelector('.subtotal').textContent.split('$')[1])
    
            carrito.push({
                id: itemId,
                nombre: itemNombre,
                precio: itemPrecio,
                cantidad: itemCantidad,
                subtotal: itemSubtotal
            })
        })
    
        localStorage.setItem('carrito', JSON.stringify(carrito))
    }
    
    document.getElementById('marcaSelect').addEventListener('change', function(event) {
        let marcaSeleccionada = event.target.value
        cargarVehiculos(marcaSeleccionada)
    });
    