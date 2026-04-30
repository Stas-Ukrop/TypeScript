interface IExportable { 
    export(format: string): string;
}

class BaseReport{
    protected title: string;
    protected ts?: Date;
    protected text: string;
    constructor(title: string, text: string) {
        this.title = title;
        this.text = text;
    }
}

class CsvReport extends BaseReport implements IExportable {
    export(format: string): string {
       if (format === 'csv') {
        this.ts = new Date();
        return `CSV Report: ${this.title} - ${this.text} at ${this.ts}`;
       } else {
        throw new Error('Unsupported format');
       }
    }
}
class PdfReport extends BaseReport implements IExportable {
    export(format: string): string {
        if (format === 'pdf') {
            this.ts = new Date();
            return `PDF Report: ${this.title} - ${this.text} at ${this.ts}`;
        } else {
            throw new Error('Unsupported format');
        }
    }
}

const csvReport = new CsvReport('Sales', 'Sales data for Q1');
console.log(csvReport.export('csv'));
const pdfReport = new PdfReport('Inventory', 'Current inventory status');
console.log(pdfReport.export('pdf'));