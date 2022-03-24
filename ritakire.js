<!-- login/logout for small devices -->
						<div class="pull-right visible-xs pad-right-10">
							<div>
								{{#if username}}
								<p class="white no-bg navbar-text pad-right-10 inline-block">Hi {{username}}</p>
								<button type="submit" class="btn btn-danger inline-block js-userLogoutBtn">Logout</button>
								{{else}}
								<p class="white no-bg navbar-text pad-right-10 inline-block">&nbsp;</p>
								<button type="submit" class="btn btn-danger inline-block" data-toggle="modal" data-target="#login-form" onclick="return false">Login</button>
								{{/if}}
							</div>
						</div>
					</div>
            <!-- login/logout for small devices -->
            <div class="pull-right visible-xs pad-right-10">
              <div>
                {{#if username}}
                <p class="white no-bg navbar-text pad-right-10 inline-block">Hi {{username}}</p>
                <button type="submit" class="btn btn-danger inline-block js-userLogoutBtn">Logout</button>
                {{else}}
                <p class="white no-bg navbar-text pad-right-10 inline-block">&nbsp;</p>
                <button type="submit" class="btn btn-danger inline-block" data-toggle="modal" data-target="#login-form" onclick="return false">Login</button>
                {{/if}}
              </div>
            </div>
          </div>
