# fireweave_setup/control_points.py — every control point this app reads, with its LOCAL value.
# Production values come from FireWeave rollouts, never from this file.
from fireweave.start import define_control_points

control_points = define_control_points({
    # "new-checkout": {"local": True},
})
