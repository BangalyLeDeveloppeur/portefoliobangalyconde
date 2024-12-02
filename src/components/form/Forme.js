import React, { useState } from "react";

function FormulaireContact() {
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false); 

  // Gestion de la soumission du formulaire
  const handleSubmit = async (event) => {
    event.preventDefault();
    const newContact = {
      nom,
      email,
      message,
    };
    setLoading(true); // Démarrer le chargement
    setError(""); // Réinitialiser les erreurs
    setSuccess(false); // Réinitialiser le succès
    try {
      const response = await fetch("http://localhost:3000/contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newContact),
      });
      if (!response.ok) {
        throw new Error("Erreur lors de l'envoi des données");
      }
      // Réinitialisation du formulaire
      setNom("");
      setEmail("");
      setMessage("");
      setSuccess(true); // Afficher le message de remerciement
    } catch (error) {
      setError("Une erreur est survenue. Veuillez réessayer.");
      console.error("Erreur:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2 className="form-container">CONTACT</h2>
      {success ? ( // Afficher un message de remerciement après une soumission réussie
        <p className="form-merci">
          Merci pour votre message ! Nous vous répondrons bientôt.
        </p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="form-nom">
            <label htmlFor="nom">Nom :</label>
            <input
              type="text"
              id="nom"
              value={nom}
              onChange={(e) => setNom(e.target.value)}
              required
            />
          </div>
          <div className="form-email">
            <label htmlFor="email">Email :</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-message">
            <label htmlFor="message">Message :</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
          <button type="submit" disabled={loading}>
            {loading ? "Envoi en cours..." : "Envoyer"}
          </button>
        </form>
      )}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

export default FormulaireContact;
