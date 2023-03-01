import SearchForm from '../Components/SearchForm';

export default function Header() {
  return (
    <header className="masthead">
      <div className="container position-relative">
        <div className="row justify-content-center">
          <div className="col-xl-10">
            <div className="text-center text-white">
              <h1 className="mb-5">Where do you want to go?</h1>
              <SearchForm />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}