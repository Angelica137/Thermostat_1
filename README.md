### Thermostat

The logic for a simple thermostat

# User story 1

As a user, when I start my thermostat
I want to know the temperature is set at 20 degrees
so that I know to adjust it up or down.

# Acceptance criteria

The user can turn the thermostat on.
A default temperature of 20 degrees is set when the thermostat starts.

Given the user has started the thermostat
When the temperature is set
Then it is set at 20 degrees


# User story 2

As a user, when I am getting cold
I want to increase the temperature of the thermostat
so that I can be warm and cozy

# Accpetance criteria

The user can increase the temperature uing an up function

Given the user wants to increase the temeperature of the thermostat
When they use the up fonction
Then the temperature increases


# User story 3

As a user, when I am feeling too warm
I want to decrease the temperature of the thermostat with a down function
so that I can be comfortable

# Acceptance criteria

The user can decrease the temperature of the thermostat using a down function

Given the user wants to lower the temperature
When they use the down function
Then the temperature decreases


### User story 4**

As a user, when I try to lower the temperature below 10 degrees
I want to know this is the minimum temperature for the thermostat
so that I can stop and give up insisting it goes lower

# Acceptance criteria

The user cannot decrease the temperature below 10 degrees

Given the user attempts to lower the temperature below 10 degrees
When they use the down function
The temperature does not decrease below 10 degrees


### User story 5**

As a user, when the power saving mode on
I want to make sure the temperature does not go above 25 degrees
so that I can make sure I do not waste energy

# Acceptance criteria

The user can switch on a power saving mode
The  power saving mode caps the temperature increase at 25 degrees

Given the user has activated the power saving mode
When they try to increase the temperature above 25 degree
The temperature does not increase above 25 degrees


### User story 6

As a user, when the power saving mode off
I want to make sure the temperature does not go above 32
so that I can make sure I do not waste energy when it is obviously not needed

# Acceptance criteria

The user can switch the power saving mode off
When the power saving mode is off, the temperature is capped at 32 degrees

Given the user has switched off the power saving mode
When they try to increase the temperature above 32 degrees
The temperature does not increase above 32 degrees


### User story 7**

As a user, when switch on th thermostat
I want the power saving to be on
so that I do not have to worry about wasting energy

# Acceptance criteria

When the thermostat is switched on, the power saving mode is on as a default

Given the user has switched off the thermostat
When they try to increase the temperature above 25 degrees
Then the temperature does not increase above 25 because power saving is on

Done with user story 5.