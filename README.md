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

