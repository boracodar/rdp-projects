import "./styles.css";

function History({ data, backgroundColor }) {
  return (
    <>
      {!!data.length && (
        <section>
          <h3>Histórico de cores geradas:</h3>

          <ul>
            {data.map((rgb) => (
              <li key={rgb.join()}>
                <div
                  className="small-preview"
                  style={{
                    backgroundColor: backgroundColor(...rgb),
                  }}
                ></div>
                {rgb.join(", ")}
              </li>
            ))}
          </ul>
        </section>
      )}
    </>
  );
}

export default History;
