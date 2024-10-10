import React from 'react'

const Faq = () => {
    return (
        <section className="">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
            <h6 className="text-lg text-greeyellow font-medium text-center mb-2">
                FAQs
            </h6>
            <h2 className="text-4xl font-manrope text-center font-bold text-white leading-[3.25rem]">
                Frequently Asked Questions
            </h2>
        </div>

        <div className="collapse bg-cardblack my-4">
            <input type="radio" name="my-accordion-1" defaultChecked />
                <div className="collapse-title py-6 text-greeyellow text-xl font-medium">Comment puis-je réserver une voiture de luxe?</div>
                    <div className="collapse-content">
                        <p className='text-white'>
                            Pour réserver une voiture de luxe, sélectionnez le modèle désiré sur notre site, choisissez la durée de location, et complétez la réservation en ligne.
                        </p>
                    </div>
                </div>
                <div className="collapse bg-cardblack my-4">
                    <input type="radio" name="my-accordion-1" />
                        <div className="collapse-title text-greeyellow text-xl font-medium">Quels sont les documents nécessaires pour la location?</div>
                            <div className="collapse-content">
                                <p className='text-white'>            Vous devrez présenter une pièce d'identité valide, un permis de conduire en cours de validité, et une carte de crédit au moment de la prise en charge du véhicule.
                                </p>
                            </div>
                </div>
                <div className="collapse bg-cardblack ">
                    <input type="radio" name="my-accordion-1" />
                        <div className="collapse-title text-greeyellow text-xl font-medium">Comment puis-je annuler ma réservation?</div>
                            <div className="collapse-content">
                                <p className='text-white'>            Pour annuler votre réservation, connectez-vous à votre compte, accédez à vos réservations, et choisissez l'option d'annulation. Vous recevrez une confirmation par email.
                                </p>
                            </div>
                        </div>
        </div>
</section>

  )
}

export default Faq
