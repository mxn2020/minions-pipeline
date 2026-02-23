"""
Minions Pipeline Python SDK

Funnel stage tracking across the full job search lifecycle
"""

__version__ = "0.1.0"


def create_client(**kwargs):
    """Create a client for Minions Pipeline.

    Args:
        **kwargs: Configuration options.

    Returns:
        dict: Client configuration.
    """
    return {
        "version": __version__,
        **kwargs,
    }

from .schemas import *
