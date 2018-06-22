all: puavo-sla-de.pdf puavo-kompat-de.pdf puavo-sla-fr.pdf puavo-kompat-fr.pdf puavo-sla-en.pdf puavo-kompat-en.pdf

clean:
	rm *.aux
	rm *.log


puavo-sla-de.pdf: puavo-sla-de.tex puavo-style-de.tex
	pdflatex puavo-sla-de.tex
	pdflatex puavo-sla-de.tex

puavo-kompat-de.pdf: puavo-kompat-de.tex puavo-style-de.tex
	pdflatex puavo-kompat-de.tex
	pdflatex puavo-kompat-de.tex


puavo-sla-fr.pdf: puavo-sla-fr.tex puavo-style-fr.tex
	pdflatex puavo-sla-fr.tex
	pdflatex puavo-sla-fr.tex

puavo-kompat-fr.pdf: puavo-kompat-fr.tex puavo-style-fr.tex
	pdflatex puavo-kompat-fr.tex
	pdflatex puavo-kompat-fr.tex


puavo-sla-en.pdf: puavo-sla-en.tex puavo-style-en.tex
	pdflatex puavo-sla-en.tex
	pdflatex puavo-sla-en.tex

puavo-kompat-en.pdf: puavo-kompat-en.tex puavo-style-en.tex
	pdflatex puavo-kompat-en.tex
	pdflatex puavo-kompat-en.tex


