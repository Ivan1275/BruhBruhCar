<header class="masthead">
    <div class="container position-relative">
        <div class="row justify-content-center">
            <div class="col-xl-10">
                <div class="text-center text-white">
                    <!-- Page heading-->
                    <h1 class="mb-5">{{ __('¿A dónde quieres ir?') }}</h1>

                    <form class="form-subscribe" id="contactForm">
                        <div class="row">
                            <!-- Departure -->
                            <div class="col" style="flex:1.5 0 0%">
                                <input class="form-control form-control-lg" id="departure" name="departure"
                                    type="text" placeholder="{{ __('Origen') }}" />
                                <div class="invalid-feedback text-white">
                                    {{ __('Origen es requerido.') }}</div>
                                <div class="invalid-feedback text-white">
                                    {{ __('Origen no es vaĺido.') }}</div>
                            </div>
                            <!-- Destination -->
                            <div class="col" style="flex:1.5 0 0%">
                                <input class="form-control form-control-lg" id="destination" name="destination"
                                    type="text" placeholder="{{ __('Destino') }}" />
                                <div class="invalid-feedback text-white">
                                    {{ __('Destino es requerido.') }}</div>
                                <div class="invalid-feedback text-white">
                                    {{ __('Destino no es vaĺido.') }}</div>
                            </div>
                            <!-- Date-->
                            <div class="col" style="flex:1 0 0%">
                                <input class="form-control form-control-lg" id="date" name="date"
                                    type="date" />
                                <div class="invalid-feedback text-white">
                                    {{ __('Fecha requerida.') }}</div>
                                <div class="invalid-feedback text-white">
                                    {{ __('La fecha no es válida.') }}</div>
                            </div>

                            <div class="col-auto"><button class="btn btn-primary btn-lg disabled" id="submitButton"
                                    type="submit">{{ __('Enviar') }}</button></div>

                        </div>

                        <div class="row" style="paddin-bopadding-bottom.5em">
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</header>
