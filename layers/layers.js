ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([57.793375, 4.341403, 107.252575, 37.905952]);
var wms_layers = [];


        var lyr_ESRIPhysical_0 = new ol.layer.Tile({
            'title': 'ESRI Physical',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Physical_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_BaseMapGrey_1 = new ol.layer.Tile({
            'title': 'Base Map (Grey)',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'http://a.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatellite_2 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_Wheatbelowethreshold_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "Wheat belowe threshold",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Wheatbelowethreshold_3.png",
    attributions: ' ',
                                projection: 'EPSG:4326',
                                alwaysInRange: true,
                                imageExtent: [58.832378, -19.249563, 142.998708, 43.750185]
                            })
                        });
var lyr_Rice75kTons_4 = new ol.layer.Image({
                            opacity: 1,
                            title: "Rice > 75 kTons",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Rice75kTons_4.png",
    attributions: ' ',
                                projection: 'EPSG:4326',
                                alwaysInRange: true,
                                imageExtent: [58.832378, -19.249563, 142.998708, 43.750185]
                            })
                        });
var format_Rice_5 = new ol.format.GeoJSON();
var features_Rice_5 = format_Rice_5.readFeatures(json_Rice_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Rice_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rice_5.addFeatures(features_Rice_5);
var lyr_Rice_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rice_5, 
                style: style_Rice_5,
                popuplayertitle: "Rice",
                interactive: true,
    title: 'Rice<br />\
    <img src="styles/legend/Rice_5_0.png" /> 75000 - 80000<br />\
    <img src="styles/legend/Rice_5_1.png" /> 80000 - 100000<br />\
    <img src="styles/legend/Rice_5_2.png" /> 100000 - 125000<br />\
    <img src="styles/legend/Rice_5_3.png" /> 125000 - 150000<br />\
    <img src="styles/legend/Rice_5_4.png" /> 150000 - 300000<br />\
    <img src="styles/legend/Rice_5_5.png" /> 300000 - 500000<br />\
    <img src="styles/legend/Rice_5_6.png" /> >500 kTons<br />'
        });
var lyr_Wheat75kTons_6 = new ol.layer.Image({
                            opacity: 1,
                            title: "Wheat >75 kTons",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Wheat75kTons_6.png",
    attributions: ' ',
                                projection: 'EPSG:4326',
                                alwaysInRange: true,
                                imageExtent: [58.832378, -19.249563, 142.998708, 43.750185]
                            })
                        });
var format_Wheatbelowthreshold1075kTons_7 = new ol.format.GeoJSON();
var features_Wheatbelowthreshold1075kTons_7 = format_Wheatbelowthreshold1075kTons_7.readFeatures(json_Wheatbelowthreshold1075kTons_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Wheatbelowthreshold1075kTons_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Wheatbelowthreshold1075kTons_7.addFeatures(features_Wheatbelowthreshold1075kTons_7);
var lyr_Wheatbelowthreshold1075kTons_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Wheatbelowthreshold1075kTons_7, 
                style: style_Wheatbelowthreshold1075kTons_7,
                popuplayertitle: "Wheat below threshold: 10 - 75 kTons",
                interactive: true,
                    title: '<img src="styles/legend/Wheatbelowthreshold1075kTons_7.png" /> Wheat below threshold: 10 - 75 kTons'
                });
var format_Wheat_8 = new ol.format.GeoJSON();
var features_Wheat_8 = format_Wheat_8.readFeatures(json_Wheat_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Wheat_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Wheat_8.addFeatures(features_Wheat_8);
var lyr_Wheat_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Wheat_8, 
                style: style_Wheat_8,
                popuplayertitle: "Wheat",
                interactive: true,
    title: 'Wheat<br />\
    <img src="styles/legend/Wheat_8_0.png" /> 75000 - 76600<br />\
    <img src="styles/legend/Wheat_8_1.png" /> 76600 - 78800<br />\
    <img src="styles/legend/Wheat_8_2.png" /> 78800 - 80700<br />\
    <img src="styles/legend/Wheat_8_3.png" /> 80700 - 83500<br />\
    <img src="styles/legend/Wheat_8_4.png" /> 83500 - 86300<br />\
    <img src="styles/legend/Wheat_8_5.png" /> 86300 - 89130<br />\
    <img src="styles/legend/Wheat_8_6.png" /> 89130 - 94900<br />'
        });
var format_IndiaBoundary_9 = new ol.format.GeoJSON();
var features_IndiaBoundary_9 = format_IndiaBoundary_9.readFeatures(json_IndiaBoundary_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_IndiaBoundary_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IndiaBoundary_9.addFeatures(features_IndiaBoundary_9);
var lyr_IndiaBoundary_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IndiaBoundary_9, 
                style: style_IndiaBoundary_9,
                popuplayertitle: "India Boundary",
                interactive: false,
                    title: '<img src="styles/legend/IndiaBoundary_9.png" /> India Boundary'
                });
var format_Buffer50Km_10 = new ol.format.GeoJSON();
var features_Buffer50Km_10 = format_Buffer50Km_10.readFeatures(json_Buffer50Km_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Buffer50Km_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Buffer50Km_10.addFeatures(features_Buffer50Km_10);
var lyr_Buffer50Km_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Buffer50Km_10, 
                style: style_Buffer50Km_10,
                popuplayertitle: "Buffer 50 Km",
                interactive: true,
                    title: '<img src="styles/legend/Buffer50Km_10.png" /> Buffer 50 Km'
                });
var format_PaperMills_11 = new ol.format.GeoJSON();
var features_PaperMills_11 = format_PaperMills_11.readFeatures(json_PaperMills_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PaperMills_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PaperMills_11.addFeatures(features_PaperMills_11);
var lyr_PaperMills_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PaperMills_11, 
                style: style_PaperMills_11,
                popuplayertitle: "Paper Mills",
                interactive: true,
                    title: '<img src="styles/legend/PaperMills_11.png" /> Paper Mills'
                });
var format_PaperMillsWheatTOP20_12 = new ol.format.GeoJSON();
var features_PaperMillsWheatTOP20_12 = format_PaperMillsWheatTOP20_12.readFeatures(json_PaperMillsWheatTOP20_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PaperMillsWheatTOP20_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PaperMillsWheatTOP20_12.addFeatures(features_PaperMillsWheatTOP20_12);
var lyr_PaperMillsWheatTOP20_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PaperMillsWheatTOP20_12, 
                style: style_PaperMillsWheatTOP20_12,
                popuplayertitle: "Paper Mills Wheat TOP 20",
                interactive: true,
    title: 'Paper Mills Wheat TOP 20<br />\
    <img src="styles/legend/PaperMillsWheatTOP20_12_0.png" /> 45107 - 55286 kTons<br />\
    <img src="styles/legend/PaperMillsWheatTOP20_12_1.png" /> 55286 - 72225 kTons<br />\
    <img src="styles/legend/PaperMillsWheatTOP20_12_2.png" /> 72225 - 91791 kTons<br />'
        });
var group_PaperMills = new ol.layer.Group({
                                layers: [lyr_PaperMills_11,lyr_PaperMillsWheatTOP20_12,],
                                fold: "open",
                                title: "Paper Mills"});
var group_Feedstock = new ol.layer.Group({
                                layers: [lyr_Wheatbelowethreshold_3,lyr_Rice75kTons_4,lyr_Rice_5,lyr_Wheat75kTons_6,lyr_Wheatbelowthreshold1075kTons_7,lyr_Wheat_8,],
                                fold: "open",
                                title: "Feedstock"});
var group_Basemap = new ol.layer.Group({
                                layers: [lyr_ESRIPhysical_0,lyr_BaseMapGrey_1,lyr_GoogleSatellite_2,],
                                fold: "open",
                                title: "Base map "});

lyr_ESRIPhysical_0.setVisible(true);lyr_BaseMapGrey_1.setVisible(true);lyr_GoogleSatellite_2.setVisible(true);lyr_Wheatbelowethreshold_3.setVisible(true);lyr_Rice75kTons_4.setVisible(false);lyr_Rice_5.setVisible(false);lyr_Wheat75kTons_6.setVisible(true);lyr_Wheatbelowthreshold1075kTons_7.setVisible(true);lyr_Wheat_8.setVisible(true);lyr_IndiaBoundary_9.setVisible(true);lyr_Buffer50Km_10.setVisible(false);lyr_PaperMills_11.setVisible(true);lyr_PaperMillsWheatTOP20_12.setVisible(true);
var layersList = [group_Basemap,group_Feedstock,lyr_IndiaBoundary_9,lyr_Buffer50Km_10,group_PaperMills];
lyr_Rice_5.set('fieldAliases', {'VALUE Rice (kTons)': 'VALUE Rice (kTons)', });
lyr_Wheatbelowthreshold1075kTons_7.set('fieldAliases', {'VALUE': 'VALUE', });
lyr_Wheat_8.set('fieldAliases', {'VALUE Wheat (kTons)': 'VALUE Wheat (kTons)', });
lyr_IndiaBoundary_9.set('fieldAliases', {'fid_1': 'fid_1', 'GID_0': 'GID_0', 'NAME_0': 'NAME_0', });
lyr_Buffer50Km_10.set('fieldAliases', {'Site Code': 'Site Code', 'Company Na': 'Company Na', 'Site Name': 'Site Name', 'Site City': 'Site City', 'Site State': 'Site State', 'Site Count': 'Site Count', 'My Site In': 'My Site In', 'My Site _1': 'My Site _1', });
lyr_PaperMills_11.set('fieldAliases', {'Site Code': 'Site Code', 'Company Na': 'Company Na', 'Site Name': 'Site Name', 'Site City': 'Site City', 'Site State': 'Site State', 'Site Count': 'Site Count', 'My Site In': 'My Site In', 'My Site _1': 'My Site _1', 'VALUE': 'VALUE', 'VALUE Whea': 'VALUE Whea', });
lyr_PaperMillsWheatTOP20_12.set('fieldAliases', {'Site Code': 'Site Code', 'Company Na': 'Company Na', 'Site Name': 'Site Name', 'Site City': 'Site City', 'Site State': 'Site State', 'Site Count': 'Site Count', 'My Site In': 'My Site In', 'My Site _1': 'My Site _1', 'VALUE': 'VALUE', 'VALUE Whea': 'VALUE Whea', 'N° TOP 20': 'N° TOP 20', });
lyr_Rice_5.set('fieldImages', {'VALUE Rice (kTons)': 'TextEdit', });
lyr_Wheatbelowthreshold1075kTons_7.set('fieldImages', {'VALUE': 'TextEdit', });
lyr_Wheat_8.set('fieldImages', {'VALUE Wheat (kTons)': 'TextEdit', });
lyr_IndiaBoundary_9.set('fieldImages', {'fid_1': 'TextEdit', 'GID_0': 'TextEdit', 'NAME_0': 'TextEdit', });
lyr_Buffer50Km_10.set('fieldImages', {'Site Code': 'TextEdit', 'Company Na': 'TextEdit', 'Site Name': 'TextEdit', 'Site City': 'TextEdit', 'Site State': 'TextEdit', 'Site Count': 'TextEdit', 'My Site In': 'TextEdit', 'My Site _1': 'TextEdit', });
lyr_PaperMills_11.set('fieldImages', {'Site Code': 'TextEdit', 'Company Na': 'TextEdit', 'Site Name': 'TextEdit', 'Site City': 'TextEdit', 'Site State': 'TextEdit', 'Site Count': 'TextEdit', 'My Site In': 'TextEdit', 'My Site _1': 'TextEdit', 'VALUE': 'TextEdit', 'VALUE Whea': 'TextEdit', });
lyr_PaperMillsWheatTOP20_12.set('fieldImages', {'Site Code': 'TextEdit', 'Company Na': 'TextEdit', 'Site Name': 'TextEdit', 'Site City': 'TextEdit', 'Site State': 'TextEdit', 'Site Count': 'TextEdit', 'My Site In': 'TextEdit', 'My Site _1': 'TextEdit', 'VALUE': 'TextEdit', 'VALUE Whea': 'TextEdit', 'N° TOP 20': 'TextEdit', });
lyr_Rice_5.set('fieldLabels', {'VALUE Rice (kTons)': 'inline label - always visible', });
lyr_Wheatbelowthreshold1075kTons_7.set('fieldLabels', {'VALUE': 'inline label - always visible', });
lyr_Wheat_8.set('fieldLabels', {'VALUE Wheat (kTons)': 'inline label - always visible', });
lyr_IndiaBoundary_9.set('fieldLabels', {'fid_1': 'no label', 'GID_0': 'no label', 'NAME_0': 'no label', });
lyr_Buffer50Km_10.set('fieldLabels', {'Site Code': 'inline label - always visible', 'Company Na': 'inline label - always visible', 'Site Name': 'hidden field', 'Site City': 'hidden field', 'Site State': 'hidden field', 'Site Count': 'inline label - always visible', 'My Site In': 'hidden field', 'My Site _1': 'hidden field', });
lyr_PaperMills_11.set('fieldLabels', {'Site Code': 'inline label - always visible', 'Company Na': 'inline label - always visible', 'Site Name': 'inline label - always visible', 'Site City': 'inline label - always visible', 'Site State': 'inline label - always visible', 'Site Count': 'inline label - always visible', 'My Site In': 'hidden field', 'My Site _1': 'hidden field', 'VALUE': 'inline label - always visible', 'VALUE Whea': 'hidden field', });
lyr_PaperMillsWheatTOP20_12.set('fieldLabels', {'Site Code': 'inline label - always visible', 'Company Na': 'inline label - always visible', 'Site Name': 'inline label - always visible', 'Site City': 'inline label - always visible', 'Site State': 'inline label - always visible', 'Site Count': 'inline label - always visible', 'My Site In': 'hidden field', 'My Site _1': 'hidden field', 'VALUE': 'inline label - always visible', 'VALUE Whea': 'inline label - always visible', 'N° TOP 20': 'inline label - always visible', });
lyr_PaperMillsWheatTOP20_12.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});