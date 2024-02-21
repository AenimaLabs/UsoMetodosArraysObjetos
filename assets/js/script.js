let radiologia = [
    { hora: '11:00', especialista: 'IGNACIO SCHULZ', paciente: 'FRANCISCA ROJAS', rut: '9878782-1', prevision: 'FONASA' },
    { hora: '11:30', especialista: 'FEDERICO SUBERCASEAUX', paciente: 'PAMELA ESTRADA', rut: '15345241-3', prevision: 'ISAPRE' },
    { hora: '15:00', especialista: 'FERNANDO WURTHZ', paciente: 'ARMANDO LUNA', rut: '16445345-9', prevision: 'ISAPRE' },
    { hora: '15:30', especialista: 'ANA MARIA GODOY', paciente: 'MANUEL GODOY', rut: '17666419-0', prevision: 'FONASA' },
    { hora: '16:00', especialista: 'PATRICIA SUAZO', paciente: 'RAMON ULLOA', rut: '14989389-K', prevision: 'FONASA' },
];

let traumatologia = [
    { hora: '8:00', especialista: 'MARIA PAZ ALTUZARRA', paciente: 'PAULA SANCHEZ', rut: '15554774-5', prevision: 'FONASA' },
    { hora: '10:00', especialista: 'RAUL ARAYA', paciente: 'ANGÉLICA NAVAS', rut: '15444147-9', prevision: 'ISAPRE' },
    { hora: '10:30', especialista: 'MARIA ARRIAGADA', paciente: 'ANA KLAPP', rut: '17879423-9', prevision: 'ISAPRE' },
    { hora: '11:00', especialista: 'ALEJANDRO BADILLA', paciente: 'FELIPE MARDONES', rut: '1547423-6', prevision: 'ISAPRE' },
    { hora: '11:30', especialista: 'CECILIA BUDNIK', paciente: 'DIEGO MARRE', rut: '16554741-K', prevision: 'FONASA' },
    { hora: '12:00', especialista: 'ARTURO CAVAGNARO', paciente: 'CECILIA MENDEZ', rut: '9747535-8', prevision: 'ISAPRE' },
    { hora: '12:30', especialista: 'ANDRES KANACRI', paciente: 'MARCIAL SUAZO', rut: '11254785-5', prevision: 'ISAPRE' },
];

let dental = [
    { hora: '8:30', especialista: 'ANDREA ZUÑIGA', paciente: 'MARCELA RETAMAL', rut: '11123425-6', prevision: 'ISAPRE' },
    { hora: '11:00', especialista: 'MARIA PIA ZAÑARTU', paciente: 'ANGEL MUÑOZ', rut: '9878789-2', prevision: 'ISAPRE' },
    { hora: '11:30', especialista: 'SCARLETT WITTING', paciente: 'MARIO KAST', rut: '7998789-5', prevision: 'FONASA' },
    { hora: '13:00', especialista: 'FRANCISCO VON TEUBER', paciente: 'KARIN FERNANDEZ', rut: '18887662-K', prevision: 'FONASA' },
    { hora: '13:30', especialista: 'EDUARDO VIÑUELA', paciente: 'HUGO SANCHEZ', rut: '17665461-4', prevision: 'FONASA' },
    { hora: '14:00', especialista: 'RAQUEL VILLASECA', paciente: 'ANA SEPULVEDA', rut: '14441281-0', prevision: 'ISAPRE' },
];

//copiar array
// let copia_radiologia = [...traumatologia]
let copia_radiologia = radiologia.slice()
let copia_traumatologia = traumatologia.slice()
let copia_dental = dental.slice()

//1.-agregar horas a traumatología y ordenar por hora

copia_traumatologia.unshift(
    { hora: '9:00', especialista: 'RENÉ POBLETE', paciente: 'ANA GELLONA', rut: '13123329-7', prevision: 'ISAPRE' },
    { hora: '09:30', especialista: 'MARIA SOLAR', paciente: 'RAMIRO ANDRADE', rut: '12221451-K', prevision: 'FONASA' },
    { hora: '10:00', especialista: 'RAUL LOYOLA', paciente: 'CARMEN ISLA', rut: '10112348-3', prevision: 'ISAPRE' },
    { hora: '10:30', especialista: 'ANTONIO LARENAS', paciente: 'PABLO LOAYZA', rut: '13453234-1', prevision: 'ISAPRE' },
    { hora: '12:00', especialista: 'MATIAS ARAVENA', paciente: 'SUSANA POBLETE', rut: '14345656-6', prevision: 'FONASA' })

console.log(copia_traumatologia)

copia_traumatologia.sort(function (a, b) {
    // Convierte las horas a minutos para comparar
    const horaA = parseInt(a.hora.split(':').join(''));
    const horaB = parseInt(b.hora.split(':').join(''));

    return horaA - horaB;
});

console.log(copia_traumatologia);

//2.-eliminar primer y último elemento de radiología
copia_radiologia.shift()
copia_radiologia.pop()
console.log(copia_radiologia)

//3.- imprimir en página html
document.write('<p>Estadisticas centro medico ñuñoa</p>')

document.write('<h1>Lista de consultas médicas Dental</h1>')

for (const consulta of copia_dental) {
    document.write("<p>" + consulta.hora + " - " + consulta.especialista + " - " + consulta.paciente + " - " + consulta.rut + " - " + consulta.prevision + "</p>");
}

//4.- imprimir listado total de pacientes atendidos en el centro médico

document.write('<h1>Listado total de pacientes</h1>')

let pacientes = ""

for (const consulta of copia_radiologia) {
    pacientes += consulta.paciente + "<br>"
}


for (const consulta of copia_traumatologia) {
    pacientes += consulta.paciente + "<br>"
}


for (const consulta of copia_dental) {
    pacientes += consulta.paciente + "<br>"
}
document.write("<p>" + pacientes + "</p>")

//5.- filtrar pacientes con isapre
let pacientes_isapre = []

for (const consulta of copia_dental) {
    if (consulta.prevision === 'ISAPRE') {
        pacientes_isapre.push(consulta.paciente);
    }
}

// Imprimir lista de pacientes de ISAPRE en la página HTML
document.write("<h1>Pacientes de ISAPRE en Dental</h1>");

for (const paciente of pacientes_isapre) {
    document.write("<p>" + paciente + " - ISAPRE</p>");
}

//6.-Filtrar aquellos pacientes que indican ser de FONASA en la lista de consultas médicas de Traumatología

let pacientes_fonasa = [];
for (const consulta of copia_traumatologia) {
    if (consulta.prevision === 'FONASA') {
        pacientes_fonasa.push(consulta.paciente);
    }
}

// Imprimir lista de pacientes de FONASA en la página HTML
document.write("<h1>Pacientes de FONASA en Traumatología</h1>");

for (const paciente of pacientes_fonasa) {
    document.write("<p>" + paciente + "- FONASA</p>");
}

