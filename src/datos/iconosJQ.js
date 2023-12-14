$(document).ready(function(){
    /* Iconos Banner */
    $.ajax({
        url:'images/icons/icon-experiencia-ow.svg',
        dataType: 'xml',
        success:function(data){
            $('.icono-experiencia-1').replaceWith(data.documentElement);
        }
    });
    $.ajax({
        url:'images/icons/icon-enfoque-integral-ow.svg',
        dataType: 'xml',
        success:function(data){
            $('.icono-enfoque-1').replaceWith(data.documentElement);
        }
    });
    $.ajax({
        url:'images/icons/icon-resultados-ow.svg',
        dataType: 'xml',
        success:function(data){
            $('.icono-resultado-1').replaceWith(data.documentElement);
        }
    });
    $.ajax({
        url:'images/icons/icon-colaboracion-compromiso-ow.svg',
        dataType: 'xml',
        success:function(data){
            $('.icono-compromiso-1').replaceWith(data.documentElement);
        }
    });

    /* Iconos Acerca de Nosotros */
    $.ajax({
        url:'images/icons/icon-experiencia-about.svg',
        dataType: 'xml',
        success:function(data){
            $('.icono-experiencia-2').replaceWith(data.documentElement);
        }
    });
    $.ajax({
        url:'images/icons/icon-alcance-about.svg',
        dataType: 'xml',
        success:function(data){
            $('.icono-alcance-2').replaceWith(data.documentElement);
        }
    });
    
    /* Iconos Servicios */
    $.ajax({
        url:'images/icons/icon-packaging-ow.svg',
        dataType: 'xml',
        success:function(data){
            $('.icono-packaging').replaceWith(data.documentElement);
        }
    });
    $.ajax({
        url:'images/icons/icon-visibilidad-pop-ow.svg',
        dataType: 'xml',
        success:function(data){
            $('.icono-visibilidad').replaceWith(data.documentElement);
        }
    });
    $.ajax({
        url:'images/icons/icon-print-ow.svg',
        dataType: 'xml',
        success:function(data){
            $('.icono-print').replaceWith(data.documentElement);
        }
    });
    $.ajax({
        url:'images/icons/icon-dotacion-ow.svg',
        dataType: 'xml',
        success:function(data){
            $('.icono-dotacion').replaceWith(data.documentElement);
        }
    });
    $.ajax({
        url:'images/icons/icon-promocionales-ow.svg',
        dataType: 'xml',
        success:function(data){
            $('.icono-promocionales').replaceWith(data.documentElement);
        }
    });
    $.ajax({
        url:'images/icons/icon-currier-ow.svg',
        dataType: 'xml',
        success:function(data){
            $('.icono-currier').replaceWith(data.documentElement);
        }
    });
    $.ajax({
        url:'images/icons/icon-design-ow.svg',
        dataType: 'xml',
        success:function(data){
            $('.icono-diseño').replaceWith(data.documentElement);
        }
    });
    $.ajax({
        url:'images/icons/icon-app-gestion-ow.svg',
        dataType: 'xml',
        success:function(data){
            $('.icono-gestion-compras').replaceWith(data.documentElement);
        }
    });

    $.ajax({
        url:'images/icons/alta-calidad-ow.svg',
        dataType: 'xml',
        success:function(data){
            $('.icono-alta-calidad').replaceWith(data.documentElement);
        }
    });
    
    $.ajax({
        url:'./images/icons/sostenibilidad-ow.svg',
        dataType: 'xml',
        success:function(data){
            $('.icono-sostenibilidad').replaceWith(data.documentElement);
        }
    });

    $.ajax({
        url:'images/icons/diseño-2-ow.svg',
        dataType: 'xml',
        success:function(data){
            $('.icono-diseño-2').replaceWith(data.documentElement);
        }
    });

    /* Icons Development */
    $.ajax({
        url:'images/icons/icon-bitrix24-ow.svg',
        dataType: 'xml',
        success:function(data){
            $('.icono-bitrix-ow').replaceWith(data.documentElement);
        }
    });
    $.ajax({
        url:'images/icons/icon-mamba-ow.svg',
        dataType: 'xml',
        success:function(data){
            $('.icono-mamba-ow').replaceWith(data.documentElement);
        }
    });
    $.ajax({
        url:'images/icons/icon-elephant-ow.svg',
        dataType: 'xml',
        success:function(data){
            $('.icono-elephant-ow').replaceWith(data.documentElement);
        }
    });
    $.ajax({
        url:'images/icons/icon-owhub-ow.svg',
        dataType: 'xml',
        success:function(data){
            $('.icono-owhub-ow').replaceWith(data.documentElement);
        }
    });
    $.ajax({
        url:'images/icons/icon-arrow-ow.svg',
        dataType: 'xml',
        success:function(data){
            $('.icono-arrow-ow').replaceWith(data.documentElement);
        }
    });
});