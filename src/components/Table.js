function Table() {
    return (
        <div className="overflow-x-auto">
            <table className="table table-xs">
                <thead>
                    <tr>
                        <th></th>
                        <th>Nombre</th>
                        <th>Significado</th>
                        <th>Recomendado emparejar con</th>
                        <th>Nativa de</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Rosa</td>
                        <td>Amor, pasión y belleza</td>
                        <td>Nube (baby’s breath), lirios, peonías</td>
                        <td>Asia, Europa, América del Norte</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Tulipán</td>
                        <td>Amor perfecto y renacimiento</td>
                        <td>Narcisos, jacintos, lirios</td>
                        <td>Asia Central, Turquía, Países Bajos</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Lavanda</td>
                        <td>Calma, gracia y pureza</td>
                        <td>Rosas, margaritas, eucalipto</td>
                        <td>Región del Mediterráneo</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Girasol</td>
                        <td>Adoración, lealtad y felicidad</td>
                        <td>Margaritas, zinnias, ásteres</td>
                        <td>América del Norte y Central</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Orquídea</td>
                        <td>Lujo, fortaleza y belleza</td>
                        <td>Helechos, anturios, lirios</td>
                        <td>Asia tropical, América Central y del Sur</td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>Cerezo en flor</td>
                        <td>Transitoriedad de la vida y renovación</td>
                        <td>Camelias, azaleas, magnolias</td>
                        <td>Japón, China, Corea</td>
                    </tr>
                    <tr>
                        <td>7</td>
                        <td>Margarita</td>
                        <td>Inocencia, pureza y nuevos comienzos</td>
                        <td>Lavanda, rosas, girasoles</td>
                        <td>Europa, América del Norte</td>
                    </tr>
                    <tr>
                        <td>8</td>
                        <td>Lirio</td>
                        <td>Pureza, devoción y renacimiento</td>
                        <td>Rosas, tulipanes, hortensias</td>
                        <td>Europa, Asia, América del Norte</td>
                    </tr>
                    <tr>
                        <td>9</td>
                        <td>Hortensia</td>
                        <td>Gratitud, gracia y abundancia</td>
                        <td>Rosas, peonías, eucalipto</td>
                        <td>Japón, China, Corea</td>
                    </tr>
                    <tr>
                        <td>10</td>
                        <td>Peonía</td>
                        <td>Romance, prosperidad y buena fortuna</td>
                        <td>Rosas, hortensias, lirios</td>
                        <td>Asia, Europa, América del Norte</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <th></th>
                        <th>Nombre</th>
                        <th>Significado</th>
                        <th>Recomendado emparejar con</th>
                        <th>Nativa de</th>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
}

export default Table;