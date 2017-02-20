/* @flow */
import React from 'react';

import {Switch, Label} from '@react-mdc/switch';
import {FormField} from '@react-mdc/form-field';
import {Caption, Typography} from '@react-mdc/typography';

import PageTitle from 'app/js/components/page-title';
import {Section, SectionTitle} from 'app/js/components/section';

type SwitchState = 'checked' | 'unchecked';

type State = {
  switch3State: SwitchState
};

export default class SwitchExample extends React.Component {
  state: State = {
    switch3State: 'unchecked'
  }

  handleSwitch3Change = () => {
    this.setState((state: State): State => {
      let switch3State = 'checked';
      switch (state.switch3State) {
        case 'checked':
          switch3State = 'unchecked';
      }
      return {switch3State};
    });
  }

  render (): React.Element<*> {
    return (
      <div>
        <PageTitle>
          Switch Examples
        </PageTitle>
        <Section>
          <SectionTitle>Switch</SectionTitle>
          <FormField>
            <Switch inputId="switch-1" name="switch-1" defaultChecked />
            <Label htmlFor="switch-1">
              Switch 1
            </Label>
          </FormField>
        </Section>
        <Section>
          <SectionTitle>Disabled Switch</SectionTitle>
          <FormField>
            <Switch inputId="switch-1" name="switch-2" disabled />
            <Label htmlFor="switch-2">
              Switch 2
            </Label>
          </FormField>
        </Section>
        <Section>
          <SectionTitle>Switch Controlled by React State</SectionTitle>
          <Typography>
            <Caption>
              State: {this.state.switch3State}
            </Caption>
          </Typography>
          <FormField>
            <Switch
              inputId="switch-3"
              onChange={this.handleSwitch3Change}
              checked={this.state.switch3State === 'checked'} />
            <Label htmlFor="switch-3">
              Switch 3
            </Label>
          </FormField>
        </Section>
      </div>
    );
  }
}
