
	
	ngOnInit(): void{
		this.route.params.subscribe(params => {
			// Assuming you have a service method to get content sections by id
			this.portalSiteService.getSections(params['id']).subscribe(contents => {
				this.contents = contents;
			});

			// If you also want to load the PortalSite info
			this.portalSiteService.get(params['id']).subscribe(site => {
				this.sitePortal = site;
			});
		});
	}


getSections(id: number): Observable<ContentSections[]> {
	return this.httpClient.get<ContentSections[]>(`api/admin/content/${id}/files`);
}
