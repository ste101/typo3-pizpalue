<?php

declare(strict_types=1);

/*
 * This file is part of the composer package buepro/typo3-pizpalue.
 *
 * For the full copyright and license information, please read the
 * LICENSE file that was distributed with this source code.
 */

namespace Buepro\Pizpalue\ViewHelpers;

use Buepro\Pizpalue\BootstrapPackage\Compatibility120\ViewHelpers\FrameViewHelper;

/**
 * FrameViewHelper
 *
 * @deprecated since v13, will be removed in v15
 */
class BootstrapPackageFrameViewHelper extends FrameViewHelper
{
    public function __construct()
    {
        trigger_error(
            __CLASS__ . ' will be removed in TYPO3 v15. Use ' . \Buepro\Pizpalue\ViewHelpers\FrameViewHelper::class . ' instead.',
            E_USER_DEPRECATED
        );
    }

    /**
     * Initialize additional arguments.
     *
     * @throws \TYPO3Fluid\Fluid\Core\ViewHelper\Exception
     */
    public function initializeArguments(): void
    {
        parent::initializeArguments();
        $this->registerArgument('ppData', 'array', 'Pizpalue data', true);
    }
}
