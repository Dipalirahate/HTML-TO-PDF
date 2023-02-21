function generatePDF(){
    const element = document.getElementById("pdfcanvert");

    html2pdf()
    .from(element)
    .save();
}