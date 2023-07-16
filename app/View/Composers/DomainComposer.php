<?php

namespace App\View\Composers;

use App\Models\Domain;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\View\View;

class DomainComposer
{
    /**
     * Bind data to the view.
     */
    public function compose(View $view): void
    {
        $view->with('currentDomainInfo', $this->getCurrentDomain())
            ->with('domains', $this->domains());
    }

    private function getCurrentDomain()
    {
        $hostWithHttp = request()->getSchemeAndHttpHost();
        return $this->domains()->filter(fn(Domain $domain) => $domain->domain == $hostWithHttp)->first();
    }

    private function domains(): Collection
    {
        return \cache(
            'domains',
            Domain::active()->get(),
            thirty_days_in_seconds()
        );
    }
}
