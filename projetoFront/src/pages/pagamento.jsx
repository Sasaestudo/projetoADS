import qrcode from '../assets/icones/qrcodeFacit.png'
import maio23PDF from '../assets/boletos/maio23.pdf';
import '../pages/css/pagamento.css'

export default function Pagamento(){
return(
  <>
  <section className='ContainerSectionPagamento'>
  <h1>Formas de Pagamento</h1>
  <div>
  <h4>Imprimir</h4>
  <a href={maio23PDF} download>PDF</a>
  </div>
  <div>
    <h4>Pix</h4>
    <p>211232142123123</p>
  </div>
  <div>
    <h4>QR Code</h4>
    <img src={qrcode} alt="QR-Code" width="90px" />
  </div>
  </section>

  </>
  );
}
