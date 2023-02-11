


$(document).ready(function () {
    var dataTable = $("#applications").DataTable({
        "pageLength": 20,
        "aoColumnDefs": [{
            "bSortable": false,
            "aTargets": ["nosort"]
        }],
        "aoColumns": [
            null,
            null,
            null,
            null,
            null,
            null
        ],
        "order": false,
        "bLengthChange": false,
        "dom": "<'top'>ct<'clear'> <\"d-flex justify-content-between mx-2 row mb-1\"<\"col-sm-12 col-md-6\"i><\"col-sm-12 col-md-6\"p>>",
        // dom: '<"d-flex justify-content-between align-items-center header-actions mx-2 row mt-75"<"col-sm-12 col-lg-4 d-flex justify-content-center justify-content-lg-start" l><"col-sm-12 col-lg-8 ps-xl-75 ps-0"<"dt-action-buttons d-flex align-items-center justify-content-center justify-content-lg-end flex-lg-nowrap flex-wrap"<"me-1"f>B>>>t<"d-flex justify-content-between mx-2 row mb-1"<"col-sm-12 col-md-6"i><"col-sm-12 col-md-6"p>>',
        "autoWidth": false,
        "processing": true,
    });

    $("#search").keyup(function () {
        dataTable.search(this.value).draw()
    })
});