import React, { memo } from 'react'
import { Router, Switch } from 'wouter'

export default memo(() => <Switch>
	<Router path="/entry" />
	<Router path="/" />
</Switch>)