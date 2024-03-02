export default function Success() {
    return (
        <>
            <div className="alert alert-success" id="alert-success">
                <div className="flexing-alert"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-check" width="25" height="25" viewBox="0 0 24 24" stroke-width="1.5" stroke="#0bf455" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                    <path d="M9 12l2 2l4 -4" />
                </svg>
                    <h4>Création réussie !</h4></div>
                <p>Vous retrouverez votre fichier sur le bureau.</p>
            </div>
        </>
    );
}