
interface IframeProps {
  iframe: string;
}
const Iframe = ({ iframe }: IframeProps)=>{
return(
  <iframe  width="928" height="522" src={iframe}  frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen  style={{border:'none',
    left: "0px",
    top: "0px",borderRadius:"20px",boxShadow:"4px 3px 9px 2px grey"}}  ></iframe>
)
}

export default Iframe