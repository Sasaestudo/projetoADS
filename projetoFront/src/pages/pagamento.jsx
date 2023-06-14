import qrcode from '../assets/icones/qrcodeFacit.png'
import maio23PDF from '../assets/boletos/maio23.pdf';

export default function Pagamento(){
  return(
  <>
  <h1>Formas de Pagamento</h1>
  <h2>Imprimir</h2>
  <a href={maio23PDF} download>PDF</a>
  <h2>Pix</h2>
  <h4>211232142123123</h4>
  <h2>QR Code</h2>
  <img src={qrcode} alt="QR-Code" width="90px" />

  </>
  );
}
