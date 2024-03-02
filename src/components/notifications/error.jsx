export default function Error() {
    return (
        <>
            <div className="alert alert-error" id="alert-error">
                <div className="flexing-alert"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-alert-circle" width="25" height="25" viewBox="0 0 24 24" stroke-width="1.5" stroke="#f04d35" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
  <path d="M12 8v4" />
  <path d="M12 16h.01" />
</svg>
                    <h4>Une erreur est survenue</h4></div>
                <p>Veuillez réssayer.</p>
            </div>
        </>
    );
}