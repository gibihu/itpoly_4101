import react from "react";

export default function Coures(){
    return(
        <div>
            <div class="m-4 grid-cols-1 md:grid-cols-2 gap-2">
                <div class="col-span-1">
                    <iframe src="/pdfs/21901v1.pdf" width="600" height="400">
                        This browser does not support PDFs. Please download the PDF to view it: <a href="path/to/yourfile.pdf">Download PDF</a>.
                    </iframe>
                    <iframe src="/pdfs/21903v1.pdf" width="600" height="400">
                        This browser does not support PDFs. Please download the PDF to view it: <a href="path/to/yourfile.pdf">Download PDF</a>.
                    </iframe>
                    <iframe src="/pdfs/31901v5.pdf" width="600" height="400">
                        This browser does not support PDFs. Please download the PDF to view it: <a href="path/to/yourfile.pdf">Download PDF</a>.
                    </iframe>
                    <iframe src="/pdfs/31903v3.pdf" width="600" height="400">
                        This browser does not support PDFs. Please download the PDF to view it: <a href="path/to/yourfile.pdf">Download PDF</a>.
                    </iframe>
                </div>
            </div>
        </div>
    );
}