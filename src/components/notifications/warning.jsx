export default function Warning() {
    return (
        <>
            <div className="alert alert-warning" id="alert-warning">
                <div className="flexing-alert"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-alert-triangle" width="25" height="25" viewBox="0 0 24 24" stroke-width="1.5" stroke="#f6b811" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M12 9v4" />
                    <path d="M10.363 3.591l-8.106 13.534a1.914 1.914 0 0 0 1.636 2.871h16.214a1.914 1.914 0 0 0 1.636 -2.87l-8.106 -13.536a1.914 1.914 0 0 0 -3.274 0z" />
                    <path d="M12 16h.01" />
                </svg>
                    <h4>Attention !</h4></div>
                <p>Vous retrouverez votre fichier sur le bureau.</p>
            </div>
        </>
    );
}