import { Link } from "@inertiajs/react"

export default function CallToAction() {
  return (
    <section className="call-to-action text-white text-center" id="signup">
      <div className="container position-relative">
        <div className="row justify-content-center">
          <div className="col-xl-6">
            <h2 className="mb-4">¿Preparado para empezar?</h2>
            <Link href="/register" className="btn btn-primary btn-lg" role="button">¡Regístrate ahora!</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
