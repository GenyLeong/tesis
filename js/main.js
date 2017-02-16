var ancho = window.innerWidth;
var altura = window.innerHeight;
$(function() {
  $(document).ready(function() {
      var gif_portada = document.getElementById("seccion_portada");
      var gif_portada_video = document.getElementById("contenedor");
      var jpg_equipo_op = document.getElementById("equipo");
      gif_portada.style.height=altura + 'px';
      gif_portada.style.width=ancho + 'px';
      gif_portada_video.style.height=altura + 'px';
      gif_portada_video.style.width=ancho + 'px';
      jpg_equipo_op.style.height=altura + 'px';
      navegador();
      $('.carousel').carousel({
        interval: 2000
      })
      

      var myFunction =  function () {
              var nav = document.getElementById("navegador")
              var alto = $("#seccion_portada").outerHeight()
              if ($(window).scrollTop() > alto) {
                $('nav').show();
              } else {
                $('nav').hide();
              }
            }
            $(window).on('scroll', myFunction);

      if (ancho<768){
        document.getElementById("botones").classList.remove('v-center');
        document.getElementById("botones").classList.add('text-center');
      }
      var scroll = document.getElementsByClassName("scroll");
      for (var s = 0; s < scroll.length; s++) {
          scroll[s].addEventListener('click', function(e) {
              e.preventDefault()
                  //this.classList.toggle('active')
              active()
              var offset = $($(this).attr('href')).offset().top;
              $('html, body').animate({
                  scrollTop: offset
              }, 500);
          })
      }
//cuadros estadisticos

      Highcharts.setOptions({
               colors: ['#2A3B42', '#F8A00B']
             });

             Highcharts.chart('container', {
         chart: {
         		backgroundColor: '#F3F5F6',
             type: 'pie'
         },
         title: {
             text: 'Diarios masivos a nivel de Lima'
         },
         subtitle: {
             text: 'Analizados en porcentaje (%)'
         },
         plotOptions: {
             series: {
                 dataLabels: {
                     enabled: true,
                     format: '<p style="font-size:16px">{point.name}</p>: {point.y:.2f}%',
                     y: 20
                 }
             }
         },
         tooltip: {
             headerFormat: '<span style="font-size:16px">{series.name}</span><br>',
             pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> del total<br/>'
         },
         series: [{
             name: 'Prensa escrita masiva',
             colorByPoint: true,
             data: [{
                 name: 'Cuentan con P.I',
                 y: 42.86,
                 drilldown: 'Cuentan con P.I',
             }, {
                 name: 'No cuentan con P.I',
                 y: 57.14,
                 drilldown: 'No cuentan con P.I',
             }]
         }],
         drilldown: {
             series: [{
                 name: 'Cuentan con P.I',
                 id: 'Cuentan con P.I',
                 data: [
                     ['La Republica (5 periodistas)', 11.66],
                     ['El Comercio (4 periodistas)', 9.33],
                     ['Perú 21 (4 periodistas)', 9.33],
                     ['Correo (2 periodistas)', 4.66],
                     ['La Razón (2 periodistas)', 4.66],
                     ['Exitosa (3 periodistas)', 6.9]
                 ]
             }, {
                 name: 'No cuentan con P.I',
                 id: 'No cuentan con P.I',
                 data: [
                     ['Karibeña (0 periodistas)', 7.14],
                     ['El Popular (0 periodistas)', 7.14],
                     ['El Ojo (0 periodistas)', 7.14],
                     ['El Chino (0 periodistas)', 7.14],
                     ['El men (0 periodistas)', 7.14],
                     ['Trome (0 periodistas)', 7.14],
                     ['UNO (0 periodistas)', 7.14],
                     ['Expreso (0 periodistas)', 7.14]
                 ]
                }]
         },
         responsive: {
             rules: [{
                 condition: {
                     maxWidth: 767
                 },
                 chartOptions: {
                     plotOptions: {
                         pie: {
                             shadow: false,
                             center: ['50%', '50%'],
                             allowPointSelect: true,
                             cursor: 'pointer',
                             dataLabels: {
                                 enabled: false,
                                 format: '<b>{point.name}</b>'
                             }
                         }
                     },
                     series: [{
                         dataLabels: {
                             enabled: true,
                             formatter: function() {
                                 return this.y > 5 ? +this.point.name : null;
                             },
                             distance: -1
                         },
                         showInLegend: true
                     }],
                     navigation: {
                 buttonOptions: {
                     enabled: false
                 }
             },
                     legend: {
                         layout: 'vertical',
                         x: 10,
                         // y: 20,
                         align: 'center',
                         verticalAlign: 'bottom',
                     }
                 }
             }]
         }
     });

Highcharts.chart('container-1', {
        chart: {
            type: 'bar',
            backgroundColor: '#F3F5F6',
        },
        title: {
            text: ''
        },
        xAxis: {
            categories: [
                'Sí',
                'No'
            ],
             lineColor: '#000000'
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Respuestas'
            },
             lineColor: '#000000'
        },
        tooltip: {
            headerFormat: '<span style="font-size:16px; color:#FFFFFF">{point.key}</span><table>',
            pointFormat: '<td style="padding:0; color:#FFFFFF"><b>{point.y} periodista(s)</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true,
            backgroundColor: '{series.color}'
        },
        plotOptions: {
            column: {
                borderWidth: 2,
            }
        },
        series: [{
            name: 'Sí',
            data: [19, ''],
            color: ''

        }, {
            name: 'No',
            data: ['', 1]

        }],
         navigation: {
            buttonOptions: {
                enabled: false
            }
        }
    });

    Highcharts.chart('container-2', {
        chart: {
            type: 'column',
            backgroundColor: '#F3F5F6',
        },
        title: {
            text: null
        },
        xAxis: {
            categories: ['Excel (9 periodistas)', 'Google Refine (0 periodistas)', 'Tableau (1 periodista)', 'Google fusion tables (0 periodistas)', 'Otros (3 periodistas)']
        },    
        tooltip: {
            shared: true,
            useHTML: true,
            headerFormat: '<table><p style="font-size:16px; color:#FFFFFF""><b>{point.key}</b></p><table>',
            pointFormat: '<tr><td style="color:#FFFFFF";>{series.name}: </td>' +
                '<td style="text-align: center; color:#FFFFFF"><b>{point.y} %</b></td></tr>',
            backgroundColor: '{series.color}'
         },
        credits: {
            enabled: false
        },
        series: [{
            name: 'Periodistas',
            data: [69.23, 0, 7.69, 0, 23.08]
        }],
        responsive: {
            rules: [{
                condition: {
                    maxWidth: 767
                },
                chartOptions: {
                    plotOptions: {
                        column: {
                            shadow: false,
                            center: ['50%', '50%'],
                            allowPointSelect: true,
                            cursor: 'pointer',
                            dataLabels: {
                                enabled: false,
                                format: '<b>{point.name}</b>'
                            }
                        }
                    },
                    series: [{
                        dataLabels: {
                            enabled: true,
                            formatter: function() {
                                return this.y > 5 ? +this.point.name : null;
                            }
                        },
                        showInLegend: true,
                    }],
                    legend: {
                      align: 'center',
                      verticalAlign: 'bottom',
                      layout: 'horizontal'
                    }
                }
            }]
        }
    });

    var column_ancho = document.body.getElementsByClassName('highcharts-point highcharts-color-0');
    var column_ancho_amarillo = document.body.getElementsByClassName('highcharts-point highcharts-color-1');
    var svg_item = document.getElementsByClassName('highcharts-root')
    for (var i = 0; i < svg_item.length; i++) {
        svg_item[i].style.fontFamily = "Noticia Text";
    }

    for (var i = 0; i < column_ancho.length; i++) {
        column_ancho[i].style.width = 60 + "px";
    }

    for (var i = 0; i < column_ancho_amarillo.length; i++) {
        column_ancho_amarillo[i].style.width = 60 + "px";
    }

    if (ancho < 768) {
    for (var i = 0; i < column_ancho.length; i++) {
        column_ancho[i].style.width = 40 + "px";
    }

    for (var i = 0; i < column_ancho_amarillo.length; i++) {
        column_ancho_amarillo[i].style.width = 40 + "px";
    }
    }  });

  function active() {
      var navlnks = document.querySelectorAll(".nav .scroll");
      Array.prototype.map.call(navlnks, function(item) {
          item.addEventListener("click", function(e) {
              var navlnks = document.querySelectorAll(".nav .scroll");
              Array.prototype.map.call(navlnks, function(item) {
                  if (item.parentNode.className == "active" || item.parentNode.className == "active open") {
                      item.parentNode.className = "";
                  }
              });
              e.currentTarget.parentNode.className = "active";
          });
      });
  };

  function navegador() {
    var elemento = document.createElement("div");
    var porhacer = document.getElementById("navegador");
    if (ancho < 768) {
        elemento.className = "hidden-sm hidden-md hidden-lg";
        elemento.innerHTML = '<div class="navbar-header v-center"><a class="navbar-brand" href="#"><img class="img-responsive" src="images/logo_tesis.png" alt="logoweb"></a><button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse"><span class="sr-only">Desplegar navegación</span><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button></div><div class="collapse navbar-collapse navbar-ex1-collapse"><ul class="nav navbar-nav text-center"><li><a href="#ojo-publico" class="scroll">Caso: Ojo Público</a></li><li><a href="#prensa-escrita" class="scroll">Prensa escrita</a></li><li><a href="#la-republica" class="scroll">Caso: La República</a></li></ul></div>'
        porhacer.appendChild(elemento);
        var ex = porhacer.lastChild;
    }
}
});
