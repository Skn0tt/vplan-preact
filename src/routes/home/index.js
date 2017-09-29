import { h, Component } from 'preact';

import { List } from 'material-ui/List';

import ReactPullToRefresh from 'react-pull-to-refresh';

import Item from '../../components/item';

import refactor from './refactor';

const mockItems = [{"klasse":"9D","art":"Vertr.","datum":"2017-09-25","stunde":8,"statt_lehrer":"KNE","statt_fach":null,"statt_raum":"F003","vertreter":"LEL","fach":"PK","raum":"F003","bemerkung":"","entfall":null,"date":{"year":2017,"month":9,"day":25}},{"klasse":"9D","art":"Vertr.","datum":"2017-09-25","stunde":9,"statt_lehrer":"KNE","statt_fach":null,"statt_raum":"F003","vertreter":"LEL","fach":"PK","raum":"F003","bemerkung":"","entfall":null,"date":{"year":2017,"month":9,"day":25}},{"klasse":"9C","art":"Vertr.","datum":"2017-09-25","stunde":1,"statt_lehrer":"HIL","statt_fach":null,"statt_raum":"A003","vertreter":"PLT","fach":"L6","raum":"A003","bemerkung":"","entfall":null,"date":{"year":2017,"month":9,"day":25}},{"klasse":"9C","art":"Vertr.","datum":"2017-09-25","stunde":2,"statt_lehrer":"HIL","statt_fach":null,"statt_raum":"A003","vertreter":"PLT","fach":"L6","raum":"A003","bemerkung":"","entfall":null,"date":{"year":2017,"month":9,"day":25}},{"klasse":"9B","art":"Vertr.","datum":"2017-09-25","stunde":1,"statt_lehrer":"HIL","statt_fach":null,"statt_raum":"A003","vertreter":"PLT","fach":"L6","raum":"A003","bemerkung":"","entfall":null,"date":{"year":2017,"month":9,"day":25}},{"klasse":"9B","art":"Vertr.","datum":"2017-09-25","stunde":2,"statt_lehrer":"HIL","statt_fach":null,"statt_raum":"A003","vertreter":"PLT","fach":"L6","raum":"A003","bemerkung":"","entfall":null,"date":{"year":2017,"month":9,"day":25}},{"klasse":"9A","art":"Vertr.","datum":"2017-09-25","stunde":6,"statt_lehrer":"KNE","statt_fach":null,"statt_raum":"F002","vertreter":"LEL","fach":"PK","raum":"F002","bemerkung":"","entfall":null,"date":{"year":2017,"month":9,"day":25}},{"klasse":"8D","art":"Entfall","datum":"2017-09-25","stunde":8,"statt_lehrer":"SCA","statt_fach":null,"statt_raum":"A206","vertreter":"","fach":"","raum":"","bemerkung":"","entfall":true,"date":{"year":2017,"month":9,"day":25}},{"klasse":"8D","art":"Entfall","datum":"2017-09-25","stunde":9,"statt_lehrer":"SCA","statt_fach":null,"statt_raum":"A206","vertreter":"","fach":"","raum":"","bemerkung":"","entfall":true,"date":{"year":2017,"month":9,"day":25}},{"klasse":"8C","art":"Betreuung","datum":"2017-09-25","stunde":5,"statt_lehrer":"ZOZ","statt_fach":null,"statt_raum":"F007","vertreter":"R\u00d6S","fach":"KR","raum":"F008","bemerkung":"","entfall":null,"date":{"year":2017,"month":9,"day":25}},{"klasse":"8C","art":"Vertr.","datum":"2017-09-25","stunde":6,"statt_lehrer":"HIL","statt_fach":null,"statt_raum":"A210","vertreter":"GIT","fach":"F6","raum":"A210","bemerkung":"","entfall":null,"date":{"year":2017,"month":9,"day":25}},{"klasse":"8C","art":"Entfall","datum":"2017-09-25","stunde":8,"statt_lehrer":"SCA","statt_fach":null,"statt_raum":"A206","vertreter":"","fach":"","raum":"","bemerkung":"","entfall":true,"date":{"year":2017,"month":9,"day":25}},{"klasse":"8C","art":"Entfall","datum":"2017-09-25","stunde":9,"statt_lehrer":"SCA","statt_fach":null,"statt_raum":"A206","vertreter":"","fach":"","raum":"","bemerkung":"","entfall":true,"date":{"year":2017,"month":9,"day":25}},{"klasse":"8B","art":"Betreuung","datum":"2017-09-25","stunde":5,"statt_lehrer":"ZOZ","statt_fach":null,"statt_raum":"F007","vertreter":"R\u00d6S","fach":"KR","raum":"F008","bemerkung":"","entfall":null,"date":{"year":2017,"month":9,"day":25}},{"klasse":"8B","art":"Entfall","datum":"2017-09-25","stunde":8,"statt_lehrer":"SCA","statt_fach":null,"statt_raum":"A206","vertreter":"","fach":"","raum":"","bemerkung":"","entfall":true,"date":{"year":2017,"month":9,"day":25}},{"klasse":"8B","art":"Entfall","datum":"2017-09-25","stunde":9,"statt_lehrer":"SCA","statt_fach":null,"statt_raum":"A206","vertreter":"","fach":"","raum":"","bemerkung":"","entfall":true,"date":{"year":2017,"month":9,"day":25}},{"klasse":"8A","art":"Entfall","datum":"2017-09-25","stunde":8,"statt_lehrer":"SCA","statt_fach":null,"statt_raum":"A206","vertreter":"","fach":"","raum":"","bemerkung":"","entfall":true,"date":{"year":2017,"month":9,"day":25}},{"klasse":"8A","art":"Entfall","datum":"2017-09-25","stunde":9,"statt_lehrer":"SCA","statt_fach":null,"statt_raum":"A206","vertreter":"","fach":"","raum":"","bemerkung":"","entfall":true,"date":{"year":2017,"month":9,"day":25}},{"klasse":"7D","art":"Entfall","datum":"2017-09-25","stunde":8,"statt_lehrer":"SCA","statt_fach":null,"statt_raum":"A206","vertreter":"","fach":"","raum":"","bemerkung":"","entfall":true,"date":{"year":2017,"month":9,"day":25}},{"klasse":"7D","art":"Entfall","datum":"2017-09-25","stunde":9,"statt_lehrer":"SCA","statt_fach":null,"statt_raum":"A206","vertreter":"","fach":"","raum":"","bemerkung":"","entfall":true,"date":{"year":2017,"month":9,"day":25}},{"klasse":"7C","art":"Vertr.","datum":"2017-09-25","stunde":4,"statt_lehrer":"SCA","statt_fach":null,"statt_raum":"A205","vertreter":"SCU","fach":"L6","raum":"A205","bemerkung":"","entfall":null,"date":{"year":2017,"month":9,"day":25}},{"klasse":"7C","art":"Vertr.","datum":"2017-09-25","stunde":5,"statt_lehrer":"SCA","statt_fach":null,"statt_raum":"A205","vertreter":"MAC","fach":"L6","raum":"A205","bemerkung":"","entfall":null,"date":{"year":2017,"month":9,"day":25}},{"klasse":"7C","art":"Entfall","datum":"2017-09-25","stunde":8,"statt_lehrer":"SCA","statt_fach":null,"statt_raum":"A206","vertreter":"","fach":"","raum":"","bemerkung":"","entfall":true,"date":{"year":2017,"month":9,"day":25}},{"klasse":"7C","art":"Entfall","datum":"2017-09-25","stunde":9,"statt_lehrer":"SCA","statt_fach":null,"statt_raum":"A206","vertreter":"","fach":"","raum":"","bemerkung":"","entfall":true,"date":{"year":2017,"month":9,"day":25}},{"klasse":"7B","art":"Vertr.","datum":"2017-09-25","stunde":4,"statt_lehrer":"SCA","statt_fach":null,"statt_raum":"A205","vertreter":"SCU","fach":"L6","raum":"A205","bemerkung":"","entfall":null,"date":{"year":2017,"month":9,"day":25}},{"klasse":"7B","art":"Vertr.","datum":"2017-09-25","stunde":5,"statt_lehrer":"SCA","statt_fach":null,"statt_raum":"A205","vertreter":"MAC","fach":"L6","raum":"A205","bemerkung":"","entfall":null,"date":{"year":2017,"month":9,"day":25}},{"klasse":"7B","art":"Entfall","datum":"2017-09-25","stunde":8,"statt_lehrer":"SCA","statt_fach":null,"statt_raum":"A206","vertreter":"","fach":"","raum":"","bemerkung":"","entfall":true,"date":{"year":2017,"month":9,"day":25}},{"klasse":"7B","art":"Entfall","datum":"2017-09-25","stunde":9,"statt_lehrer":"SCA","statt_fach":null,"statt_raum":"A206","vertreter":"","fach":"","raum":"","bemerkung":"","entfall":true,"date":{"year":2017,"month":9,"day":25}},{"klasse":"7A","art":"Entfall","datum":"2017-09-25","stunde":8,"statt_lehrer":"SCA","statt_fach":null,"statt_raum":"A206","vertreter":"","fach":"","raum":"","bemerkung":"","entfall":true,"date":{"year":2017,"month":9,"day":25}},{"klasse":"7A","art":"Entfall","datum":"2017-09-25","stunde":9,"statt_lehrer":"SCA","statt_fach":null,"statt_raum":"A206","vertreter":"","fach":"","raum":"","bemerkung":"","entfall":true,"date":{"year":2017,"month":9,"day":25}},{"klasse":"6D","art":"Vertr.","datum":"2017-09-25","stunde":5,"statt_lehrer":"KRM","statt_fach":null,"statt_raum":"E103","vertreter":"WET","fach":"LQ","raum":"E103","bemerkung":"","entfall":null,"date":{"year":2017,"month":9,"day":25}},{"klasse":"6D","art":"Betreuung","datum":"2017-09-25","stunde":6,"statt_lehrer":"KRM","statt_fach":null,"statt_raum":"E103","vertreter":"KEM","fach":"D","raum":"E101","bemerkung":"","entfall":null,"date":{"year":2017,"month":9,"day":25}},{"klasse":"6C","art":"Statt-Vertr.","datum":"2017-09-25","stunde":1,"statt_lehrer":"LEM","statt_fach":null,"statt_raum":"E106","vertreter":"STW","fach":"M","raum":"E106","bemerkung":"","entfall":null,"date":{"year":2017,"month":9,"day":25}},{"klasse":"6C","art":"Statt-Vertr.","datum":"2017-09-25","stunde":2,"statt_lehrer":"LEM","statt_fach":null,"statt_raum":"E106","vertreter":"STW","fach":"M","raum":"E106","bemerkung":"","entfall":null,"date":{"year":2017,"month":9,"day":25}},{"klasse":"6B","art":"Betreuung","datum":"2017-09-25","stunde":6,"statt_lehrer":"SCA","statt_fach":null,"statt_raum":"E101","vertreter":"KEM","fach":"D","raum":"E101","bemerkung":"","entfall":null,"date":{"year":2017,"month":9,"day":25}},{"klasse":"5B","art":"Betreuung","datum":"2017-09-25","stunde":3,"statt_lehrer":"DAH","statt_fach":null,"statt_raum":"E203","vertreter":"KLU","fach":"M","raum":"E203","bemerkung":"","entfall":null,"date":{"year":2017,"month":9,"day":25}},{"klasse":"5B","art":"Betreuung","datum":"2017-09-25","stunde":4,"statt_lehrer":"DAH","statt_fach":null,"statt_raum":"E203","vertreter":"KLU","fach":"M","raum":"E203","bemerkung":"","entfall":null,"date":{"year":2017,"month":9,"day":25}},{"klasse":"5A","art":"Vertr.","datum":"2017-09-25","stunde":3,"statt_lehrer":"SCA","statt_fach":null,"statt_raum":"E201","vertreter":"SID","fach":"D","raum":"E201","bemerkung":"","entfall":null,"date":{"year":2017,"month":9,"day":25}},{"klasse":"5A","art":"Vertr.","datum":"2017-09-25","stunde":5,"statt_lehrer":"LEM","statt_fach":null,"statt_raum":"E201","vertreter":"D\u00dcS","fach":"M","raum":"E201","bemerkung":"","entfall":null,"date":{"year":2017,"month":9,"day":25}},{"klasse":"5A","art":"Statt-Vertr.","datum":"2017-09-25","stunde":6,"statt_lehrer":"LEM","statt_fach":null,"statt_raum":"E201","vertreter":"FRC","fach":"M","raum":"E201","bemerkung":"","entfall":null,"date":{"year":2017,"month":9,"day":25}},{"klasse":"Q2","art":"Klausur","datum":"2017-09-25","stunde":1,"statt_lehrer":"","statt_fach":null,"statt_raum":"","vertreter":"KLI","fach":"D G1","raum":"A207","bemerkung":"Klausur","entfall":null,"date":{"year":2017,"month":9,"day":25}},{"klasse":"Q2","art":"Klausur","datum":"2017-09-25","stunde":1,"statt_lehrer":"","statt_fach":null,"statt_raum":"","vertreter":"SLB","fach":"GEOG2","raum":"F103","bemerkung":"Klausur","entfall":null,"date":{"year":2017,"month":9,"day":25}},{"klasse":"Q2","art":"Klausur","datum":"2017-09-25","stunde":1,"statt_lehrer":"","statt_fach":null,"statt_raum":"","vertreter":"SLB","fach":"PH G2","raum":"F103","bemerkung":"Klausur","entfall":null,"date":{"year":2017,"month":9,"day":25}},{"klasse":"Q2","art":"EVA","datum":"2017-09-25","stunde":1,"statt_lehrer":"KLI","statt_fach":null,"statt_raum":"F104","vertreter":"","fach":"","raum":"","bemerkung":"","entfall":null,"date":{"year":2017,"month":9,"day":25}},{"klasse":"Q1","art":"EVA","datum":"2017-09-25","stunde":1,"statt_lehrer":"SCA","statt_fach":null,"statt_raum":"A207","vertreter":"","fach":"D G3","raum":"A207","bemerkung":"","entfall":null,"date":{"year":2017,"month":9,"day":25}},{"klasse":"Q2","art":"EVA","datum":"2017-09-25","stunde":1,"statt_lehrer":"SLB","statt_fach":null,"statt_raum":"F103","vertreter":"","fach":"","raum":"","bemerkung":"","entfall":null,"date":{"year":2017,"month":9,"day":25}},{"klasse":"Q2","art":"Klausur","datum":"2017-09-25","stunde":2,"statt_lehrer":"","statt_fach":null,"statt_raum":"","vertreter":"KLI","fach":"D G1","raum":"A207","bemerkung":"Klausur","entfall":null,"date":{"year":2017,"month":9,"day":25}},{"klasse":"Q2","art":"Klausur","datum":"2017-09-25","stunde":2,"statt_lehrer":"","statt_fach":null,"statt_raum":"","vertreter":"SLB","fach":"GEOG2","raum":"F103","bemerkung":"Klausur","entfall":null,"date":{"year":2017,"month":9,"day":25}},{"klasse":"Q2","art":"Klausur","datum":"2017-09-25","stunde":2,"statt_lehrer":"","statt_fach":null,"statt_raum":"","vertreter":"SLB","fach":"PH G2","raum":"F103","bemerkung":"Klausur","entfall":null,"date":{"year":2017,"month":9,"day":25}},{"klasse":"Q2","art":"EVA","datum":"2017-09-25","stunde":2,"statt_lehrer":"SLB","statt_fach":null,"statt_raum":"F103","vertreter":"","fach":"","raum":"","bemerkung":"","entfall":null,"date":{"year":2017,"month":9,"day":25}},{"klasse":"Q2","art":"EVA","datum":"2017-09-25","stunde":2,"statt_lehrer":"KLI","statt_fach":null,"statt_raum":"F104","vertreter":"","fach":"","raum":"","bemerkung":"","entfall":null,"date":{"year":2017,"month":9,"day":25}},{"klasse":"Q1","art":"EVA","datum":"2017-09-25","stunde":2,"statt_lehrer":"SCA","statt_fach":null,"statt_raum":"A207","vertreter":"","fach":"D G3","raum":"A207","bemerkung":"","entfall":null,"date":{"year":2017,"month":9,"day":25}},{"klasse":"EF","art":"Vertr.","datum":"2017-09-25","stunde":2,"statt_lehrer":"M\u00d6L","statt_fach":null,"statt_raum":"A105","vertreter":"PRE","fach":"E G2","raum":"A105","bemerkung":"","entfall":null,"date":{"year":2017,"month":9,"day":25}},{"klasse":"Q2","art":"Klausur","datum":"2017-09-25","stunde":3,"statt_lehrer":"","statt_fach":null,"statt_raum":"","vertreter":"REU","fach":"D G1","raum":"A207","bemerkung":"Klausur","entfall":null,"date":{"year":2017,"month":9,"day":25}},{"klasse":"Q2","art":"Klausur","datum":"2017-09-25","stunde":3,"statt_lehrer":"","statt_fach":null,"statt_raum":"","vertreter":"COL","fach":"PH G2","raum":"F103","bemerkung":"Klausur","entfall":null,"date":{"year":2017,"month":9,"day":25}},{"klasse":"Q2","art":"Klausur","datum":"2017-09-25","stunde":3,"statt_lehrer":"","statt_fach":null,"statt_raum":"","vertreter":"COL","fach":"GEOG2","raum":"F103","bemerkung":"Klausur","entfall":null,"date":{"year":2017,"month":9,"day":25}},{"klasse":"Q2","art":"EVA","datum":"2017-09-25","stunde":3,"statt_lehrer":"KRM","statt_fach":null,"statt_raum":"A005","vertreter":"","fach":"PL G2","raum":"A005","bemerkung":"","entfall":null,"date":{"year":2017,"month":9,"day":25}},{"klasse":"Q2","art":"EVA","datum":"2017-09-25","stunde":4,"statt_lehrer":"KRM","statt_fach":null,"statt_raum":"A005","vertreter":"","fach":"PL G2","raum":"A005","bemerkung":"","entfall":null,"date":{"year":2017,"month":9,"day":25}},{"klasse":"Q1","art":"EVA","datum":"2017-09-25","stunde":6,"statt_lehrer":"DAH","statt_fach":null,"statt_raum":"A002","vertreter":"","fach":"M L3","raum":"A002","bemerkung":"","entfall":null,"date":{"year":2017,"month":9,"day":25}},{"klasse":"Q2","art":"EVA","datum":"2017-09-25","stunde":8,"statt_lehrer":"LEM","statt_fach":null,"statt_raum":"I","vertreter":"","fach":"SP 1G1","raum":"I","bemerkung":"","entfall":null,"date":{"year":2017,"month":9,"day":25}},{"klasse":"EF","art":"EVA","datum":"2017-09-25","stunde":8,"statt_lehrer":"BAR","statt_fach":null,"statt_raum":"F101","vertreter":"","fach":"GE G1","raum":"F102","bemerkung":"","entfall":null,"date":{"year":2017,"month":9,"day":25}},{"klasse":"Q2","art":"EVA","datum":"2017-09-25","stunde":9,"statt_lehrer":"LEM","statt_fach":null,"statt_raum":"I","vertreter":"","fach":"SP 1G1","raum":"I","bemerkung":"","entfall":null,"date":{"year":2017,"month":9,"day":25}},{"klasse":"EF","art":"EVA","datum":"2017-09-25","stunde":9,"statt_lehrer":"BAR","statt_fach":null,"statt_raum":"F101","vertreter":"","fach":"GE G1","raum":"F102","bemerkung":"","entfall":null,"date":{"year":2017,"month":9,"day":25}},{"klasse":"9D","art":"Vertr.","datum":"2017-09-22","stunde":1,"statt_lehrer":"HER","statt_fach":null,"statt_raum":"B009","vertreter":"STR","fach":"MU","raum":"B009","bemerkung":"","entfall":null,"date":{"year":2017,"month":9,"day":22}},{"klasse":"9D","art":"Vertr.","datum":"2017-09-22","stunde":2,"statt_lehrer":"HER","statt_fach":null,"statt_raum":"B009","vertreter":"STR","fach":"MU","raum":"B009","bemerkung":"","entfall":null,"date":{"year":2017,"month":9,"day":22}},{"klasse":"9B","art":"Betreuung","datum":"2017-09-22","stunde":4,"statt_lehrer":"HER","statt_fach":null,"statt_raum":"B009","vertreter":"THE","fach":"MU","raum":"B009","bemerkung":"","entfall":null,"date":{"year":2017,"month":9,"day":22}},{"klasse":"9A","art":"Vertr.","datum":"2017-09-22","stunde":3,"statt_lehrer":"REI","statt_fach":null,"statt_raum":"A004","vertreter":"WER","fach":"M","raum":"B114","bemerkung":"","entfall":null,"date":{"year":2017,"month":9,"day":22}},{"klasse":"9A","art":"Vertr.","datum":"2017-09-22","stunde":4,"statt_lehrer":"REI","statt_fach":null,"statt_raum":"A004","vertreter":"COL","fach":"M","raum":"B114","bemerkung":"","entfall":null,"date":{"year":2017,"month":9,"day":22}},{"klasse":"8C","art":"Vertr.","datum":"2017-09-22","stunde":4,"statt_lehrer":"HIL","statt_fach":null,"statt_raum":"A210","vertreter":"MAU","fach":"F6","raum":"A210","bemerkung":"","entfall":null,"date":{"year":2017,"month":9,"day":22}},{"klasse":"8C","art":"Vertr.","datum":"2017-09-22","stunde":5,"statt_lehrer":"HIL","statt_fach":null,"statt_raum":"A210","vertreter":"FRC","fach":"F6","raum":"A210","bemerkung":"","entfall":null,"date":{"year":2017,"month":9,"day":22}},{"klasse":"8C","art":"Vertr.","datum":"2017-09-22","stunde":6,"statt_lehrer":"SPI","statt_fach":null,"statt_raum":"A105","vertreter":"DOM","fach":"E5","raum":"A105","bemerkung":"","entfall":null,"date":{"year":2017,"month":9,"day":22}},{"klasse":"8B","art":"Vertr.","datum":"2017-09-22","stunde":1,"statt_lehrer":"REI","statt_fach":null,"statt_raum":"A004","vertreter":"GR\u00dc","fach":"M","raum":"A004","bemerkung":"","entfall":null,"date":{"year":2017,"month":9,"day":22}},{"klasse":"8B","art":"Vertr.","datum":"2017-09-22","stunde":2,"statt_lehrer":"REI","statt_fach":null,"statt_raum":"A004","vertreter":"GR\u00dc","fach":"M","raum":"A004","bemerkung":"","entfall":null,"date":{"year":2017,"month":9,"day":22}},{"klasse":"7C","art":"Vertr.","datum":"2017-09-22","stunde":3,"statt_lehrer":"SCA","statt_fach":null,"statt_raum":"A205","vertreter":"LEM","fach":"L6","raum":"A205","bemerkung":"","entfall":null,"date":{"year":2017,"month":9,"day":22}},{"klasse":"7B","art":"Vertr.","datum":"2017-09-22","stunde":3,"statt_lehrer":"SCA","statt_fach":null,"statt_raum":"A205","vertreter":"LEM","fach":"L6","raum":"A205","bemerkung":"","entfall":null,"date":{"year":2017,"month":9,"day":22}},{"klasse":"7B","art":"Vertr.","datum":"2017-09-22","stunde":5,"statt_lehrer":"SPI","statt_fach":null,"statt_raum":"A103","vertreter":"KNO","fach":"E5","raum":"A103","bemerkung":"","entfall":null,"date":{"year":2017,"month":9,"day":22}},{"klasse":"6D","art":"Vertr.","datum":"2017-09-22","stunde":1,"statt_lehrer":"SPI","statt_fach":null,"statt_raum":"A210","vertreter":"BEL","fach":"F6","raum":"A210","bemerkung":"","entfall":null,"date":{"year":2017,"month":9,"day":22}},{"klasse":"6D","art":"Vertr.","datum":"2017-09-22","stunde":1,"statt_lehrer":"HIL","statt_fach":null,"statt_raum":"E103","vertreter":"GER","fach":"L6","raum":"E103","bemerkung":"","entfall":null,"date":{"year":2017,"month":9,"day":22}},{"klasse":"6D","art":"Vertr.","datum":"2017-09-22","stunde":2,"statt_lehrer":"HIL","statt_fach":null,"statt_raum":"E103","vertreter":"GER","fach":"L6","raum":"E103","bemerkung":"","entfall":null,"date":{"year":2017,"month":9,"day":22}},{"klasse":"6D","art":"Vertr.","datum":"2017-09-22","stunde":2,"statt_lehrer":"SPI","statt_fach":null,"statt_raum":"A210","vertreter":"BEL","fach":"F6","raum":"A210","bemerkung":"","entfall":null,"date":{"year":2017,"month":9,"day":22}},{"klasse":"6D","art":"Vertr.","datum":"2017-09-22","stunde":5,"statt_lehrer":"KRM","statt_fach":null,"statt_raum":"E103","vertreter":"KLI","fach":"D","raum":"E103","bemerkung":"","entfall":null,"date":{"year":2017,"month":9,"day":22}},{"klasse":"6D","art":"Vertr.","datum":"2017-09-22","stunde":6,"statt_lehrer":"KRM","statt_fach":null,"statt_raum":"E103","vertreter":"GIT","fach":"D","raum":"E103","bemerkung":"","entfall":null,"date":{"year":2017,"month":9,"day":22}},{"klasse":"6B","art":"Betreuung","datum":"2017-09-22","stunde":5,"statt_lehrer":"SCA","statt_fach":null,"statt_raum":"E101","vertreter":"KEM","fach":"D","raum":"E101","bemerkung":"","entfall":null,"date":{"year":2017,"month":9,"day":22}},{"klasse":"6B","art":"Vertr.","datum":"2017-09-22","stunde":6,"statt_lehrer":"SCA","statt_fach":null,"statt_raum":"E101","vertreter":"OVE","fach":"D","raum":"E101","bemerkung":"","entfall":null,"date":{"year":2017,"month":9,"day":22}},{"klasse":"6A","art":"Vertr.","datum":"2017-09-22","stunde":1,"statt_lehrer":"SPI","statt_fach":null,"statt_raum":"A210","vertreter":"BEL","fach":"F6","raum":"A210","bemerkung":"","entfall":null,"date":{"year":2017,"month":9,"day":22}},{"klasse":"6A","art":"Vertr.","datum":"2017-09-22","stunde":1,"statt_lehrer":"HIL","statt_fach":null,"statt_raum":"E103","vertreter":"GER","fach":"L6","raum":"E103","bemerkung":"","entfall":null,"date":{"year":2017,"month":9,"day":22}},{"klasse":"6A","art":"Vertr.","datum":"2017-09-22","stunde":2,"statt_lehrer":"SPI","statt_fach":null,"statt_raum":"A210","vertreter":"BEL","fach":"F6","raum":"A210","bemerkung":"","entfall":null,"date":{"year":2017,"month":9,"day":22}},{"klasse":"6A","art":"Vertr.","datum":"2017-09-22","stunde":2,"statt_lehrer":"HIL","statt_fach":null,"statt_raum":"E103","vertreter":"GER","fach":"L6","raum":"E103","bemerkung":"","entfall":null,"date":{"year":2017,"month":9,"day":22}},{"klasse":"6A","art":"Vertr.","datum":"2017-09-22","stunde":3,"statt_lehrer":"BAR","statt_fach":null,"statt_raum":"E105","vertreter":"DAM","fach":"GE","raum":"E105","bemerkung":"","entfall":null,"date":{"year":2017,"month":9,"day":22}},{"klasse":"5A","art":"Vertr.","datum":"2017-09-22","stunde":4,"statt_lehrer":"SCA","statt_fach":null,"statt_raum":"E201","vertreter":"LEM","fach":"D(F)5\/6","raum":"E201","bemerkung":"","entfall":null,"date":{"year":2017,"month":9,"day":22}},{"klasse":"EF","art":"Raum-Vtr.","datum":"2017-09-22","stunde":1,"statt_lehrer":"REU","statt_fach":null,"statt_raum":"F007","vertreter":"REU","fach":"KR G1","raum":"A105","bemerkung":"","entfall":null,"date":{"year":2017,"month":9,"day":22}},{"klasse":"Q2","art":"EVA","datum":"2017-09-22","stunde":1,"statt_lehrer":"BAR","statt_fach":null,"statt_raum":"A103","vertreter":"","fach":"GE Z1","raum":"A103","bemerkung":"","entfall":null,"date":{"year":2017,"month":9,"day":22}},{"klasse":"Q2","art":"EVA","datum":"2017-09-22","stunde":1,"statt_lehrer":"KRM","statt_fach":null,"statt_raum":"A005","vertreter":"","fach":"PL G1","raum":"A005","bemerkung":"","entfall":null,"date":{"year":2017,"month":9,"day":22}},{"klasse":"EF","art":"EVA","datum":"2017-09-22","stunde":1,"statt_lehrer":"PER","statt_fach":null,"statt_raum":"E206","vertreter":"","fach":"ER G2","raum":"E206","bemerkung":"","entfall":null,"date":{"year":2017,"month":9,"day":22}},{"klasse":"EF","art":"Betreuung","datum":"2017-09-22","stunde":1,"statt_lehrer":"ZOZ","statt_fach":null,"statt_raum":"F008","vertreter":"REU","fach":"KR G2","raum":"A105","bemerkung":"","entfall":null,"date":{"year":2017,"month":9,"day":22}},{"klasse":"EF","art":"Raum-Vtr.","datum":"2017-09-22","stunde":2,"statt_lehrer":"REU","statt_fach":null,"statt_raum":"F007","vertreter":"REU","fach":"KR G1","raum":"A105","bemerkung":"","entfall":null,"date":{"year":2017,"month":9,"day":22}},{"klasse":"Q2","art":"EVA","datum":"2017-09-22","stunde":2,"statt_lehrer":"KRM","statt_fach":null,"statt_raum":"A005","vertreter":"","fach":"PL G1","raum":"A005","bemerkung":"","entfall":null,"date":{"year":2017,"month":9,"day":22}},{"klasse":"Q2","art":"EVA","datum":"2017-09-22","stunde":2,"statt_lehrer":"BAR","statt_fach":null,"statt_raum":"A103","vertreter":"","fach":"GE Z1","raum":"A103","bemerkung":"","entfall":null,"date":{"year":2017,"month":9,"day":22}},{"klasse":"EF","art":"EVA","datum":"2017-09-22","stunde":2,"statt_lehrer":"PER","statt_fach":null,"statt_raum":"E206","vertreter":"","fach":"ER G2","raum":"E206","bemerkung":"","entfall":null,"date":{"year":2017,"month":9,"day":22}},{"klasse":"EF","art":"Betreuung","datum":"2017-09-22","stunde":2,"statt_lehrer":"ZOZ","statt_fach":null,"statt_raum":"F008","vertreter":"REU","fach":"KR G2","raum":"A105","bemerkung":"","entfall":null,"date":{"year":2017,"month":9,"day":22}},{"klasse":"Q1","art":"EVA","datum":"2017-09-22","stunde":3,"statt_lehrer":"SPI","statt_fach":null,"statt_raum":"A105","vertreter":"","fach":"E G3","raum":"A105","bemerkung":"","entfall":null,"date":{"year":2017,"month":9,"day":22}},{"klasse":"EF","art":"EVA","datum":"2017-09-22","stunde":3,"statt_lehrer":"BRE","statt_fach":null,"statt_raum":"A002","vertreter":"","fach":"M G4","raum":"A002","bemerkung":"","entfall":null,"date":{"year":2017,"month":9,"day":22}},{"klasse":"GL","art":"Entfall","datum":"2017-09-22","stunde":3,"statt_lehrer":"KRM","statt_fach":null,"statt_raum":"E204","vertreter":"","fach":"","raum":"","bemerkung":"","entfall":true,"date":{"year":2017,"month":9,"day":22}},{"klasse":"Q2","art":"EVA","datum":"2017-09-22","stunde":4,"statt_lehrer":"KRM","statt_fach":null,"statt_raum":"A005","vertreter":"","fach":"PL G2","raum":"A005","bemerkung":"","entfall":null,"date":{"year":2017,"month":9,"day":22}},{"klasse":"Q1","art":"EVA","datum":"2017-09-22","stunde":4,"statt_lehrer":"SPI","statt_fach":null,"statt_raum":"A105","vertreter":"","fach":"E G3","raum":"A105","bemerkung":"","entfall":null,"date":{"year":2017,"month":9,"day":22}},{"klasse":"EF","art":"EVA","datum":"2017-09-22","stunde":4,"statt_lehrer":"BRE","statt_fach":null,"statt_raum":"A002","vertreter":"","fach":"M G4","raum":"A002","bemerkung":"","entfall":null,"date":{"year":2017,"month":9,"day":22}},{"klasse":"Q1","art":"Betreuung","datum":"2017-09-22","stunde":5,"statt_lehrer":"REI","statt_fach":null,"statt_raum":"B110","vertreter":"VDB","fach":"IF L1","raum":"B110","bemerkung":"","entfall":null,"date":{"year":2017,"month":9,"day":22}},{"klasse":"EF","art":"EVA","datum":"2017-09-22","stunde":6,"statt_lehrer":"BRE","statt_fach":null,"statt_raum":"A005","vertreter":"","fach":"PL G2","raum":"A005","bemerkung":"","entfall":null,"date":{"year":2017,"month":9,"day":22}},{"klasse":"Q1","art":"Betreuung","datum":"2017-09-22","stunde":6,"statt_lehrer":"REI","statt_fach":null,"statt_raum":"B110","vertreter":"VDB","fach":"IF L1","raum":"B110","bemerkung":"","entfall":null,"date":{"year":2017,"month":9,"day":22}},{"klasse":"EF","art":"Sondereins.","datum":"2017-09-22","stunde":7,"statt_lehrer":"","statt_fach":null,"statt_raum":"","vertreter":"M\u00dcL","fach":"","raum":"G","bemerkung":"","entfall":null,"date":{"year":2017,"month":9,"day":22}},{"klasse":"Q1","art":"Betreuung","datum":"2017-09-22","stunde":7,"statt_lehrer":"REI","statt_fach":null,"statt_raum":"B110","vertreter":"VDB","fach":"IF L1","raum":"B110","bemerkung":"","entfall":null,"date":{"year":2017,"month":9,"day":22}},{"klasse":"EF","art":"Sondereins.","datum":"2017-09-22","stunde":8,"statt_lehrer":"","statt_fach":null,"statt_raum":"","vertreter":"M\u00dcL","fach":"","raum":"G","bemerkung":"","entfall":null,"date":{"year":2017,"month":9,"day":22}},{"klasse":"Q1","art":"Raum-Vtr.","datum":"2017-09-22","stunde":8,"statt_lehrer":"MAC","statt_fach":null,"statt_raum":"G","vertreter":"MAC","fach":"SP_5G1","raum":"H","bemerkung":"","entfall":null,"date":{"year":2017,"month":9,"day":22}},{"klasse":"Q2","art":"EVA","datum":"2017-09-22","stunde":8,"statt_lehrer":"KNO","statt_fach":null,"statt_raum":"H","vertreter":"","fach":"SP 4G1","raum":"","bemerkung":"","entfall":null,"date":{"year":2017,"month":9,"day":22}},{"klasse":"Q1","art":"Raum-Vtr.","datum":"2017-09-22","stunde":9,"statt_lehrer":"MAC","statt_fach":null,"statt_raum":"G","vertreter":"MAC","fach":"SP_5G1","raum":"H","bemerkung":"","entfall":null,"date":{"year":2017,"month":9,"day":22}},{"klasse":"Q2","art":"EVA","datum":"2017-09-22","stunde":9,"statt_lehrer":"KNO","statt_fach":null,"statt_raum":"H","vertreter":"","fach":"SP 4G1","raum":"","bemerkung":"","entfall":null,"date":{"year":2017,"month":9,"day":22}}];

const isBrowser = typeof window !== 'undefined'

class Home extends Component {
	listItems = state =>
		refactor(
			state.items.filter(item => item.klasse == state.klasse)
		)
		.sort((a, b) => a.date > b.date)
		.map(item => (
			<Item {...item} />
		));

	refreshDataPromise = new Promise((resolve, reject) => {
		const proxy = 'https://cors-anywhere.herokuapp.com/'
		const api = 'http://vplanapp.ema-bonn.de/api?type=json'
		fetch(proxy + api)
			.then(res => res.json())
			.then(items => {
				this.setState({ items });
				this.updateLocalStorage();
				
				resolve();
			})
			.catch(err => reject(err))
	})

	updateLocalStorage = () => {
		localStorage.setItem('items', JSON.stringify(this.state.items));
		localStorage.setItem('klasse', JSON.stringify(this.state.klasse));
	}

	constructor(props) {
		super(props);

		if (isBrowser) {
			let items = JSON.parse(localStorage.getItem('items'));
			let klasse = JSON.parse(localStorage.getItem('klasse'));
			
			// if (items == null) items = mockItems;
			if (klasse == null) klasse = 'Q1';
	
			this.state = {
				items,
				klasse,
			};
		} else {
			this.state = {
				items: [],
				klasse: '5A'
			}
		}
	}

	componentWillMount() {
		if (isBrowser) this.refreshDataPromise
	}

	handlePullToRefresh(resolve, reject) {
		this.refreshDataPromise
			.then(() => resolve())
			.catch(() => reject())
	}

	render(props, state) {
		const items = this.listItems(state);
		return (
			<ReactPullToRefresh
				onRefresh={this.handlePullToRefresh}
			>
			{
				items.length > 0 ?
				<List>
					{items}
				</List> :
				<p>Keine Vertretung!</p>
			}
			</ReactPullToRefresh>
		);
	}
}

export default Home;
